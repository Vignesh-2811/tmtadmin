import Sidebar from '@/components/Sidebar';
import styles from '@/styles/Home.module.css';
export default function addevent() {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

function Content() {
  return (
    <>
      <div className='container'>
        <div className='row'></div>
      </div>
    </>
  );
}
