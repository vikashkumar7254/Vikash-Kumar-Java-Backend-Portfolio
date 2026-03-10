import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import Markdown from "react-markdown";

const articles = [
  {
    title: "Mastering Spring Security with JWT",
    excerpt: "A deep dive into implementing stateless authentication in your Spring Boot applications using JSON Web Tokens.",
    content: `
# Mastering Spring Security with JWT: A Comprehensive Guide

In the modern landscape of web development, **stateless authentication** has become the gold standard for building scalable and secure backend systems. This guide will walk you through the deep technical details of implementing **JSON Web Tokens (JWT)** with **Spring Security**.

## 1. The Core Concept: Why Stateless?
Traditional session-based authentication requires the server to store session data in memory or a database. As you scale to multiple server instances, you need session replication or "sticky sessions." 

**JWT solves this** by carrying all necessary user information within the token itself. The server only needs a **Secret Key** to verify the token's authenticity.

## 2. Setting Up Dependencies
First, ensure your \`pom.xml\` includes the necessary libraries:

\`\`\`xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
</dependency>
\`\`\`

## 3. The JWT Utility Class
This class is the heart of your token management. It handles generation, parsing, and validation.

\`\`\`java
@Component
public class JwtUtils {
    private String jwtSecret = "yourSecretKey";
    private int jwtExpirationMs = 86400000;

    public String generateJwtToken(Authentication authentication) {
        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();
        return Jwts.builder()
            .setSubject((userPrincipal.getUsername()))
            .setIssuedAt(new Date())
            .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
            .signWith(SignatureAlgorithm.HS512, jwtSecret)
            .compact();
    }

    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (Exception e) {
            logger.error("Invalid JWT token: {}", e.getMessage());
        }
        return false;
    }
}
\`\`\`

## 4. Implementing the Auth Filter
The filter intercepts every request, extracts the JWT from the header, validates it, and sets the authentication in the Security Context.

\`\`\`java
public class AuthTokenFilter extends OncePerRequestFilter {
    @Autowired private JwtUtils jwtUtils;
    @Autowired private UserDetailsServiceImpl userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, ...) {
        String jwt = parseJwt(request);
        if (jwt != null && jwtUtils.validateJwtToken(jwt)) {
            String username = jwtUtils.getUserNameFromJwtToken(jwt);
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            UsernamePasswordAuthenticationToken authentication = 
                new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(request, response);
    }
}
\`\`\`

## 5. Final Security Configuration
Finally, wire everything together in your configuration class.

\`\`\`java
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
            .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
            .authorizeRequests().antMatchers("/api/auth/**").permitAll()
            .anyRequest().authenticated();
        
        http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}
\`\`\`

## Conclusion
By implementing JWT, you've decoupled your authentication logic from the server state, allowing your backend to scale horizontally with ease. Remember to always keep your **Secret Key** safe and use **HTTPS** to prevent token interception.
`,
    date: "Feb 15, 2024",
    readTime: "8 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Optimizing MySQL Queries for Scale",
    excerpt: "Learn how to identify and fix slow queries in your Java applications to ensure your backend can handle thousands of requests.",
    content: `
# Optimizing MySQL Queries for Scale: From Slow to Lightning Fast

In high-traffic applications, the database is often the first point of failure. A single unoptimized query can cascade into a complete system outage. This article explores deep optimization techniques for **MySQL** in a **Java/Spring** environment.

## 1. The Power of "EXPLAIN"
Before optimizing, you must understand how MySQL sees your query. Prepend \`EXPLAIN\` to any SELECT statement to see the execution plan.

\`\`\`sql
EXPLAIN SELECT * FROM orders WHERE status = 'SHIPPED' AND user_id = 500;
\`\`\`

Look for:
- **type**: \`ALL\` means a full table scan (Bad!). Look for \`ref\` or \`range\`.
- **rows**: The estimated number of rows MySQL must examine.
- **key**: The index actually being used.

## 2. Advanced Indexing Strategies
Don't just index every column. Use **Composite Indexes** for queries that filter by multiple fields.

**Rule of Thumb**: Put the most selective column first in a composite index.

\`\`\`sql
-- Good for: WHERE user_id = ? AND status = ?
CREATE INDEX idx_user_status ON orders(user_id, status);
\`\`\`

## 3. Query Refactoring Best Practices
- **Avoid SELECT ***: Fetching unnecessary columns increases I/O and memory usage.
- **Use Pagination**: Never fetch thousands of rows at once. Use \`LIMIT\` and \`OFFSET\`.
- **Avoid Wildcards at Start**: \`LIKE '%term'\` cannot use indexes. Use \`LIKE 'term%'\` instead.

## 4. Connection Pooling with HikariCP
In Spring Boot, ensure you are using **HikariCP** (the default) and tune it correctly.

\`\`\`properties
spring.datasource.hikari.maximum-pool-size=20
spring.datasource.hikari.idle-timeout=30000
spring.datasource.hikari.pool-name=SpringBootHikariCP
\`\`\`

## 5. Application-Level Caching (Redis)
For data that doesn't change frequently, don't hit the database at all. Use **Spring Cache** with **Redis**.

\`\`\`java
@Cacheable(value = "products", key = "#id")
public Product getProductById(Long id) {
    return productRepository.findById(id).orElseThrow();
}
\`\`\`

## 6. Database Sharding and Read Replicas
When a single database instance isn't enough:
- **Read Replicas**: Direct all SELECT queries to a secondary "read-only" instance.
- **Sharding**: Split your data across multiple physical databases based on a shard key (e.g., \`tenant_id\`).

## Summary
Optimization is an iterative process. Monitor your **Slow Query Logs**, use **APM tools** like New Relic or Datadog, and always test your changes under production-like load.
`,
    date: "Jan 28, 2024",
    readTime: "12 min read",
    category: "Database",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Building Microservices with Spring Cloud",
    excerpt: "An introductory guide to service discovery, configuration management, and circuit breakers in a microservices architecture.",
    content: `
# Building Resilient Microservices with Spring Cloud

Transitioning from a monolith to microservices introduces significant complexity. **Spring Cloud** provides a suite of tools to handle service discovery, configuration, and fault tolerance.

## 1. Service Discovery with Netflix Eureka
In a dynamic cloud environment, IP addresses change constantly. **Eureka** acts as a phonebook for your services.

**Server Setup**:
\`\`\`java
@EnableEurekaServer
@SpringBootApplication
public class EurekaServerApplication { ... }
\`\`\`

**Client Registration**:
\`\`\`properties
eureka.client.serviceUrl.defaultZone=http://localhost:8761/eureka/
spring.application.name=inventory-service
\`\`\`

## 2. Centralized Configuration (Spring Cloud Config)
Managing properties for 50+ services manually is impossible. Use a central Git repository to store configurations.

\`\`\`java
@EnableConfigServer
@SpringBootApplication
public class ConfigServerApplication { ... }
\`\`\`

## 3. API Gateway: The Front Door
**Spring Cloud Gateway** provides a single entry point, handling routing, security, and rate limiting.

\`\`\`yaml
spring:
  cloud:
    gateway:
      routes:
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**
\`\`\`

## 4. Fault Tolerance with Resilience4j
What happens when Service A calls Service B and Service B is down? Without a **Circuit Breaker**, Service A's threads will hang, leading to a cascading failure.

\`\`\`java
@CircuitBreaker(name = "inventoryService", fallbackMethod = "fallback")
public String checkInventory(String code) {
    return restTemplate.getForObject("http://inventory/check/" + code, String.class);
}

public String fallback(String code, Exception e) {
    return "Inventory status currently unavailable";
}
\`\`\`

## 5. Distributed Tracing (Micrometer Tracing)
Debugging a request that spans 5 services is hard. Use **Micrometer Tracing** (formerly Sleuth) and **Zipkin** to visualize the request flow.

## Best Practices for Microservices
- **Database per Service**: Never share a database between services.
- **Event-Driven Communication**: Use RabbitMQ or Kafka for asynchronous tasks.
- **Automated Testing**: Contract testing (Pact) is essential to ensure service compatibility.

## Final Thoughts
Microservices aren't a silver bullet. They add operational overhead but provide the agility and scalability needed for large-scale enterprise applications.
`,
    date: "Jan 10, 2024",
    readTime: "15 min read",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  }
];

export function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  return (
    <section id="blog" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-950 dark:text-white">Latest Articles</h2>
          <p className="text-slate-800 dark:text-slate-300">
            I write about Java, Spring Boot, and backend architecture to share my knowledge and help other developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest text-primary">
                  <span>{article.category}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2 text-slate-950 dark:text-white">
                  {article.title}
                </h3>
                <p className="text-slate-800 dark:text-slate-400 text-xs sm:text-sm mb-6 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>
                  <button className="text-primary hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[95vh] bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary transition-colors z-10"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="overflow-y-auto flex-1">
                <div className="aspect-video w-full">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 sm:p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 text-[10px] sm:text-sm font-bold uppercase tracking-widest text-primary">
                    <span>{selectedArticle.category}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="text-slate-500 dark:text-slate-400">{selectedArticle.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="text-slate-500 dark:text-slate-400">{selectedArticle.readTime}</span>
                  </div>
                  
                  <div className="markdown-body prose prose-sm sm:prose-base dark:prose-invert max-w-none">
                    <Markdown>{selectedArticle.content}</Markdown>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
