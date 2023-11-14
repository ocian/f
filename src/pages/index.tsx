import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const A = () => <div>home page 1</div>;

root.render(<A />);
