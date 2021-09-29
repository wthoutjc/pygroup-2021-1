use sgv2;
SELECT * FROM users;
SELECT * FROM update_password;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM update_password;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM token_blocklist;

SELECT * FROM token_blocklist;