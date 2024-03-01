function formatNotes(notes) {
  return notes.map(({ content, id, title }) => ({
    id,
    title,
    content,
  }));
}

function formatProject({ id, notes, title }) {
  return {
    id,
    title,
    notes: formatNotes(notes),
  };
}

export { formatProject };
