FROM openjdk:20
LABEL maintainer="hamit.mizrak"
#ARG JAR_FILE=../target/springboot_react_blog_9-0.0.1-SNAPSHOT.jar
ARG JAR_FILE=springboot_react_blog_9-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} blog.jar
ENTRYPOINT ["java","-jar","blog.jar"]