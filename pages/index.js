import Head from "next/head";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

import MultiStepForm from "./MultiStepForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wizard Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid">
        <div className="card-deck">
          <div className="card ">
            <div className="card-header text-center">Wizard Form</div>
            <div className="card-body">
              <form>
                <MultiStepForm />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
