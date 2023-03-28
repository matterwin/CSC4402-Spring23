SELECT id, name, DATE_FORMAT(releaseDate, "%Y-%M-%D") as releaseDate, filepath, avg
FROM movieTable INNER JOIN
(SELECT AVG(rating) AS avg
FROM movieReviewTable
WHERE movieId=?) as movieAverage
WHERE id=?;
