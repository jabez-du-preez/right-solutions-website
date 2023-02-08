import React from "react";
import { teams } from "../../../data/Teams.json";
import TeamSection from "../../HomeSix/TeamSection";
import TeamLayout from "../TeamLayout";

export default function TeamFour() {
  return (
    <TeamLayout
      pageTitle="Team One"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "team", path: "team-four" },
      ]}
    >
      <TeamSection teams={teams} className="pb-240" />
    </TeamLayout>
  );
}
