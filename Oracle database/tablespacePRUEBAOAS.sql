drop tablespace PRUEBAOASDEF including contents and datafiles;
drop tablespace PRUEBAOASTMP including contents and datafiles;
drop user PRUEBA_OAS_USR;

--create tablespace
create tablespace PRUEBAOASDEF DATAFILE 'C:\oraclexe\app\oracle\oradata\XE\PRUEBAOASDEF.DBF' SIZE 2M AUTOEXTEND ON;

create temporary tablespace PRUEBAOASTMP 'C:\oraclexe\app\oracle\oradata\XE\PRUEBAOASTMP.DBF' size 2M autoextend ON;

--create user
create user PRUEBA_OAS_USR identified by PRUEBA123
default tablespace PRUEBAOASDEF
temporary tablespace PRUEBAOASTMP
quota 2M on PRUEBAOASDEF;

grant connect, resource to PRUEBA_OAS_USR with admin option;
grant create public synonym, create any view to PRUEBA_OAS_USR;