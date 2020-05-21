# Database deployment
Create a database
```bash
sqlite3 crops.db
```

Create a table
```sql
create table crops (
    [id] integer not null primary key autoincrement,
    [name] varchar(255) not null,
    [description] varchar(255)
);
```
