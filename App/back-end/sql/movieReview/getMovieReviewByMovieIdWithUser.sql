SELECT *
FROM movieReviewTable
INNER JOIN userAuthTable ON userId=id
WHERE movieId=?
ORDER BY date DESC;
