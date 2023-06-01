

import dynamic from 'next/dynamic';
 
const Dashboard = dynamic(() => import('../components/dashboard'), {
  loading: () => <p>Loading...</p>,
});
 
export default function dash() {
  return <Dashboard />;
}