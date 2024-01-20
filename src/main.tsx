import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/lib/router';
import '@/styles/global.css';

const root = createRoot(document.getElementById('root')!);

root.render(<RouterProvider router={router} />);
