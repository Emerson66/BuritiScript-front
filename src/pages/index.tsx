import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GetStaticProps } from 'next'; 
import Card from '../components/Card';
import styles from './home.module.scss';
import { type } from 'os';

type HomeProps = {

}

export default function Home(props: HomeProps) {

  return (
    <div className="container">
      <section className=''>
      <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <Card/>
            </div>
            <div className="col-sm-4">
              <Card/>
            </div>
            <div className="col-sm-4">
              <Card/>
            </div>
            <div className="col-sm-4">
              <Card/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





