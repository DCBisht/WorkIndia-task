import logo from './logo.svg';
import styles from './App.module.scss';
import { useEffect, useRef } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addAcceptedCandidates, addAppliedCandidates, addRejectedCandidates } from './store/reducers/data';
import Column from './components/column/column';


function App() {
  const dispatch = useDispatch();
  const initialized = useRef(false)
  const separateData = (data) => {
    data?.forEach(item => {
      if (item?.status == 'Applied') dispatch(addAppliedCandidates(item))
      else if (item?.status == "Accepted") dispatch(addAcceptedCandidates(item))
      else if (item?.status == 'Rejected') dispatch(addRejectedCandidates(item))
    })
  }
  const getData = async () => {
    try {
      const res = await axios.get("https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d");
      const data = res?.data?.data;
      separateData(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      getData();
      // My actual effect logic...
    }
  }, [])
  return (
    <div className={styles.Container} >
      <Column data="Applied" />
      <Column data="Accepted" />
      <Column data="Rejected" />
    </div >
  );
}

export default App;
