begin;
select plan(1); -- only one statement to run

SELECT has_column(
    'id',
    'username'
);

select * from finish();
rollback;
