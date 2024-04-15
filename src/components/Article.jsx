import React from 'react';

function Article({ title, date, preview, minutes }) {
  const formattedDate = date || "January 1, 1970"; // Set default value for date

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      {minutes && <p>Time to read: {minutes} minutes</p>}
    </article>
  );
}

export default Article;