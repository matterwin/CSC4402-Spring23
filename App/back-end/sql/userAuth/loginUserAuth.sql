SELECT *
FROM userAuthTable
WHERE email=? AND password=?
LIMIT 1;
