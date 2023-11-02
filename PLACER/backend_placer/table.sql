create table user(
    id int primary key auto_increment,
    name varchar(250),
    contactNumber varchar(20),
    email varchar(50),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE(email)
);

insert into user(name,contactNumber,email,password,status,role)values('Admin','762483199','mtharun@gmail.com','123123','true','admin');

create table depertment(
    id int not null auto_increment,
    dep_name varchar(250),
    primary key(id)
)


create table companies(
    comp_id int not null auto_increment,
    comp_name varchar(250),
    company_salary varchar(50),
    comp_email varchar(250),
    status varchar(50),
    primary key(comp_id)
)

insert into companies ( comp_id,comp_name,company_salary,comp_email,comp_type,location,link)values()