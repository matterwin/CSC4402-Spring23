SELECT id, genre, length, description, name, DATE_FORMAT(releaseDate, "%Y-%M-%D") as releaseDate, filepath, avg
FROM movieTable INNER JOIN
(SELECT movieId, AVG(rating) AS avg
FROM movieReviewTable
GROUP BY movieId) as movieAverage
WHERE id=movieAverage.movieId
ORDER BY releaseDate DESC;
