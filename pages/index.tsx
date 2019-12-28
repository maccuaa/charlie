import * as React from "react";
import Head from "next/head";

import "normalize.css";

import Layout from "../components/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  subYears,
  subMonths
} from "date-fns";

const CHARLIE_BIRTHDAY = new Date(2019, 4, 19);

const datediff = (from: Date, to: Date) => {
  const result = [];

  const years = differenceInYears(to, from);

  if (years > 0) {
    result.push(`${years} years`);
    to = subYears(to, years);
  }

  const months = differenceInMonths(to, from);

  if (months > 0) {
    result.push(`${months} months`);
    to = subMonths(to, months);
  }

  const days = differenceInDays(to, from);

  if (days > 0) {
    result.push(`${days} days`);
  }

  return result.join(" "); //1 years 4 months 13 days
};

const Home = () => {
  const TODAY = new Date();

  const diff = datediff(CHARLIE_BIRTHDAY, TODAY);

  return (
    <>
      <style jsx>{`
        a {
          color: inherit;
        }
      `}</style>
      <Head>
        <title>Charlie</title>
        <link rel="icon" href="/paw-icon.png" />
      </Head>

      <Layout>
        <h1>{`Charlie is ${diff} old`}</h1>
        <a href="https://www.instagram.com/the.charlie.dood">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </Layout>
    </>
  );
};

export default Home;
