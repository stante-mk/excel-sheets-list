import { useEffect, useState } from 'react';

function App() {
  const [sheets, setSheets] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    Office.onReady(() => void loadSheets());
  }, []);

  const loadSheets = async () => {
    await Excel.run(async ctx => {
      const ws = ctx.workbook.worksheets;
      ws.load('items/name');
      await ctx.sync();
      setSheets(ws.items.map(s => s.name));
    });
  };

  const activate = async name => {
    await Excel.run(async ctx => {
      ctx.workbook.worksheets.getItem(name).activate();
      await ctx.sync();
    });
  };

  const filtered = sheets.filter(n => n.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ padding: 12 }}>
      <h2>📄 Excel Sheets List</h2>
      <input
        type="text"
        placeholder="Cerca..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 10 }}
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map(name => (
          <li
            key={name}
            onClick={() => activate(name)}
            style={{ padding: 8, borderBottom: '1px solid #ccc', cursor: 'pointer' }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
