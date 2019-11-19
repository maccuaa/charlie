import React from "react"

import "normalize.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pawIcon from '../images/paw-icon.png';

import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  subYears,
  subMonths,
} from "date-fns"

import "typeface-quicksand"

const CHARLIE_BIRTHDAY = new Date("2019", 4, 19)

function datediff(from, to) {
  const result = []

  const years = differenceInYears(to, from)
  if (years > 0) {
    result.push(`${years} years`)
    to = subYears(to, years)
  }

  const months = differenceInMonths(to, from)
  if (months > 0) {
    result.push(`${months} months`)
    to = subMonths(to, months)
  }

  const days = differenceInDays(to, from)
  if (days > 0) {
    result.push(`${days} days`)
  }

  return result.join(" ") //1 years 4 months 13 days
}

const IndexPage = () => {
  const TODAY = new Date()

  const diff = datediff(CHARLIE_BIRTHDAY, TODAY)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{`Charlie is ${diff} old`}</h1>
      <img src={pawIcon} alt="Logo" style={{
        maxWidth: "50%",
        maxHeight: 100,
        marginTop: 24
      }} />
    </Layout>
  )
}

export default IndexPage
