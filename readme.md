# Are you a company? do you need a survey for customers inside a big event (like MWC)?
- Lightweight implementation of the "MEAN Stack"
by Marco Antonio Pajares
## Modular, easy-to-use (yet powerful) survey.

- Assuming you already have the needed MEAN Stack pieces installed on your computer/server (MongoDB & NodeJS)

# Initial page (login)
Its not really a login page, just stores in a cookie the name of the employee who find the potential customer
![Screenshot](http://s2.postimg.org/kk57jetgp/Captura_de_pantalla_2016_02_06_a_las_11_10_16.png)
# Survey page
![Screenshot](http://s14.postimg.org/kro1rn481/Captura_de_pantalla_2016_02_06_a_las_11_12_11.png)
# Resume page
Once everything has been properly stored
![Screenshot](http://s18.postimg.org/qkmmbte5l/Captura_de_pantalla_2016_02_06_a_las_11_13_07.png)
# Data page
To access directly to the data
![Screenshot](http://s24.postimg.org/400pbo83p/Captura_de_pantalla_2016_02_06_a_las_11_14_33.png)

## Mongo Schema
| company      	| String        	|
| name         	| String        	|
| priority     	| String        	|
| company_size 	| String        	|
| status       	| String        	|
| notes        	| String        	|
| lead_owner   	| String        	|
| firstImage   	| String (path) 	|
| secondImage  	|  String(path) 	|

## To init:

- npm install

## To run:

- mongod (extra terminal)
- node app.js

go to http://localhost:8010

## To enable the MongoDB & endpoints

- go to routes/config.js and set ddbb to true

Coming..
- bash script for windows to run both automatically
