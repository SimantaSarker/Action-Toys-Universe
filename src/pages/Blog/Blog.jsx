import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog")
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto p-9">
      <div className="card  bg-base-300 shadow-xl" data-aos="fade-up-right"  data-aos-easing="linear"
    data-aos-duration="1500">
        <div className="card-body">
          <h1 className="">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <p className="mt-8" style={{ fontFamily: "sans-serif" }}>
            In authentication and authorization processes, particularly in web
            and mobile apps, an access token and a refresh token are frequently
            employed. They are essential in managing and allowing access to
            materials that are protected.Access Token: Following a successful
            authentication, an authentication server (such as OAuth or OpenID
            Connect) will issue an access token to a client application.Refresh
            Token: During the initial authentication process, the authentication
            server also issues a refresh token along with the access token.
            Refresh tokens have a longer validity duration than access tokens,
            which have a shorter lifespan
          </p>
        </div>
      </div>
      <div className="card  bg-base-300 shadow-xl" data-aos="fade-up-right"  data-aos-easing="linear"
    data-aos-duration="1500">
        <div className="card-body">
          <h2 className="">Compare SQL and NoSQL databases?</h2>
          <p style={{ fontFamily: "sans-serif" }} className="mt-8">
            Data management and querying are done using SQL, or Structured Query
            Language. Data should be arranged in tables with rows and columns
            according to a strict, predetermined schema. A tabular structure for
            data storage enforces linkages and limitations. Vertical scaling is
            frequently accomplished by updating the hardware resources on a
            single server.Data is kept in an adaptable, schema-free way.
            Different data models, such as key-value, document-oriented,
            columnar, or graph-based, are supported. Highly scalable, with
            additional servers allowing for horizontal growth. Allow for
            flexible data formats and agile development. suitable for managing
            significant amounts of semi- or unstructured da
          </p>
        </div>
      </div>
      <div className="card  bg-base-300 shadow-xl" data-aos="fade-up-right"  data-aos-easing="linear"
    data-aos-duration="1500">
        <div className="card-body">
          <h2 className="">What is express js? What is Nest JS (google it)?</h2>
          <p style={{fontFamily:"sans-serif"}} className="mt-8">Express.js is a well-known and lightweight Node.js web application framework that makes it easier to create online apps and APIs by offering a limited range of functionality, routing capabilities, and middleware support. It blends the greatest elements of functional programming, TypeScript, and object-oriented programming (OOP). NestJS offers a solid architecture and adheres to the modular design pattern, making it ideal for creating scalable, enterprise-level applications. Its capabilities, which include decorators, middleware, dependency injection, and a robust module structure, make it a popular option for creating intricate backend systems.</p>
        
        </div>
      </div>
      <div className="card  bg-base-300 shadow-xl" data-aos="fade-up-right"  data-aos-easing="linear"
    data-aos-duration="1500">
        <div className="card-body">
          <h2 className="">What is MongoDB aggregate and how does it work </h2>
          <p style={{fontFamily:"sans-serif"}}>Advanced data processing and analysis are made possible in MongoDB collections via the feature known as MongoDB aggregate. When a series of data transformation stages are applied to a collection of documents, computed results based on the specified operations are produced. Filtering, aggregating, projecting, sorting, and doing computations are just examples of the steps. As the documents move through the pipeline, the data is modified and shaped at each stage until the desired outcome is achieved.Pipeline Stages: To identify the data transformation steps you wish to carry out, you define an array of stages. The papers moving through the pipeline are altered at each stage, which reflects a particular activity.</p>
       
        </div>
      </div>
  
   
    </div>
  );
};

export default Blog;
