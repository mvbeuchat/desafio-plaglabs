# desafio-plaglabs

Desafío realizado por Matías Beuchat para Onlypays.

La aplicación esta dividida en backend y frontend, utilizando Rails y React, respectivamente.


**Requerimientos:**

Backend:
1. *Ruby 2.7.7*
2. *Rails 6.0.5*

Frontend:
1. *React v18.1.0*
2. *Node v14.19.1*



El backend está almacenado en un ElasticBeanstalk de AWS con URL http://plagstore-env.eba-p8qspvph.us-east-2.elasticbeanstalk.com/. Este se conecta a la base de datos solicitada (las credenciales estan en las variables de entorno de AWS, por lo que no están en el código).

El frontend está almacenado en un *bucket* de S3 de AWS, conectándose a los endpoints provistos por el backend. La url es http://plagstore-frontend.s3-website.us-east-2.amazonaws.com/.



**Referencias:**

- https://stackoverflow.com/
- https://ant.design/
- https://guides.rubyonrails.org/