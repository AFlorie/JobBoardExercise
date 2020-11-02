import React from "react";

import Job from "./Job";

const Jobs = (props) => {
  return (
    <div className="container">
      <section className="job-containter">
        <Job
          borderColor="red"
          title="Full Time Sales Associate - Sydney Boutique"
          info="CDI - Australie - Sydney"
        />
        <Job
          borderColor="green"
          title="Agent de sécurité - Pantin"
          info="CDI - France - Pantin"
        />
        <Job
          borderColor="yellow"
          title="Responsable d'atelier (H/F)"
          info="CDD - France - Paris"
        />
        <Job
          borderColor="blue"
          title="Chef de projet"
          info="CDD - France - Paris"
        />
        <Job
          borderColor="pink"
          title="Développeur React.js"
          info="CDD - France - Paris"
        />
        <Job
          borderColor="red"
          title="Sales Associate Stockholm"
          info="CDI - Suède - Stockholm"
        />
        <Job
          borderColor="green"
          title="Vendeur/se Crans Montana"
          info="CDI - Suisse - Crans-Montana"
        />
        <Job
          borderColor="yellow"
          title="CRM & Data Data Quality Analyst "
          info="CDI - USA - New-York"
        />
        <Job
          borderColor="blue"
          title="Infirmier (H/F)"
          info="CDI - France - Pantin"
        />
      </section>
    </div>
  );
};

export default Jobs;
