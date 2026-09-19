import express from 'express';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];

app.get('/', (req, res) => {
  res.send('Welcome to my portfolio!');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/projects', (req, res) => {
  const tag = req.query.tag;

  if (tag === undefined) {
    return res.json(projects);
  }

  const matches = projects.filter(project => project.tag === tag);

  if (matches.length === 0) {
    return res.send('No projects found with that tag.');
  }

  res.json(matches);
});

app.get('/contact', (req, res) => {
  res.send('Contact me here.');
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});