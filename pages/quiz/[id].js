import { func } from "prop-types";
import React from "react";

export default function QuizDaGaleraPage() {
  return <div>Desafio</div>;
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
