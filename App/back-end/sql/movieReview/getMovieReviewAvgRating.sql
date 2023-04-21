SELECT AVG(rating) AS avg
FROM movieReviewTable
WHERE movieId=?
ORDER BY date DESC;
