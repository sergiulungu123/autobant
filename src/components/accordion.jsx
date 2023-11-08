import * as React from 'react';

import Userfront, {
  LoginForm,
  PasswordResetForm,
  SignupForm
} from "@userfront/toolkit/react";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InitProject from './nestjs/initProject';
import NpmInstall from './nestjs/npmInstall';
import PrismaInstall from './nestjs/prismaInstall';
import Settings from './nestjs/settings';
import Typography from '@mui/material/Typography';

function AccordionSteps() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Init project</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 className="code">Steps</h3>
            <h3 className="code">1)Install the Nest CLI</h3>
            <NpmInstall />
            <h3 className="code">
              2)Initialize a new NestJS project using the Nest CLI.
            </h3>
            <InitProject />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Setting up a project starter
            <Settings />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Prisma settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Setting up a project starter
            <PrismaInstall />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionSteps;
