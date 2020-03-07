const taskBoardData = {
  lanes: [
    {
      id: 'PLANNED',
      title: 'Training Searches',
      color: '#2096f3',
      label: '20/70',
      cards: [
        {
          id: 'Milk',
          title: 'DB Advanced Training',
          label: '15 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Trainer for Oracle 10G DBA',
          tags: [
            { title: 'Priority', color: 'white', bgcolor: '#F44336' },
            { title: 'Notifications', color: 'white', bgcolor: '#FF9800' },
          ]
        },
        {
          id: 'Plan2',
          title: 'Scrum Master',
          label: '10 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Scrum Master Trainer Needed in Ontario',
          tags: [
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
            { title: 'Feature', color: 'white', bgcolor: '#388E3C' },
          ]
        },
        {
          id: 'Plan3',
          title: 'Scrum Master',
          label: '30 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Scrum Master Trainer for NYC',
          tags: [
            { title: 'Notifications', color: 'white', bgcolor: '#FF9800' },
          ]
        },
        {
          id: 'Plan4',
          title: 'UX DLS Trainer',
          label: '5 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Design Language System Definition Trainer',
          tags: [
            { title: 'Priority', color: 'white', bgcolor: '#F44336' },
            { title: 'Notifications', color: 'white', bgcolor: '#FF9800' },
            { title: 'Feature', color: 'white', bgcolor: '#388E3C' },
          ]
        }
      ]
    },
    {
      id: 'WIP',
      title: 'Shortlisting Started',
      color: '#AB47BC',
      label: '10/20',
      cards: [
        {
          id: 'Wip1',
          title: 'Oracle DBA Trainer',
          label: '30 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Accenture GBS: Oracle 11G, 12G trainer required at ITPB, Bangalore',
          tags: [
            { title: 'Priority', color: 'white', bgcolor: '#F44336' },
            { title: 'Feature', color: 'white', bgcolor: '#388E3C' },
          ]
        },
        {
          id: 'Archived1',
          title: 'Dev Ops Training: AWS',
          label: '300 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'ZipGo: AWS Trainer needed for EC2, ElasticBealstalk, Container Service and Route53 at Indiranagar, Bangalore',
          tags: [
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
            { title: 'Priority', color: 'white', bgcolor: '#F44336' },
            { title: 'Notifications', color: 'white', bgcolor: '#FF9800' },
            { title: 'Feature', color: 'white', bgcolor: '#388E3C' },
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
            { title: 'Priority', color: 'white', bgcolor: '#F44336' },
            { title: 'Notifications', color: 'white', bgcolor: '#FF9800' },
            { title: 'Feature', color: 'white', bgcolor: '#388E3C' },
          ]
        }
      ]
    },
    {
      id: 'BLOCKED',
      title: 'TRAINING IN PROGRESS',
      color: '#EC407A',
      label: '0/0',
      cards: [
        {
          id: 'Repeat1',
          title: 'Network Security',
          label: '30 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Flipkart: Deploying Network Security with Multi A-Z Zone isolation at Pune',
          tags: [
            { title: 'Priority', color: 'white', bgcolor: '#F44336' },
          ]
        }
      ]
    },
    {
      id: 'COMPLETED',
      title: 'Completed',
      color: '#43A047',
      label: '2/5',
      cards: [
        {
          id: 'Completed1',
          title: 'DBA for PostGres',
          label: '15 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'HDFC Bank: Database Architect for Security Aspects of Multi-Tenant Deployments at PGL, New Delhi'
        },
        {
          id: 'Completed2',
          title: 'SAP HANA Training',
          label: '15 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Accenture: SAP HANA Training for v2 migrations at ITPL, Bangalore'
        },
        {
          id: 'Archived1',
          title: 'GoLang Foundation',
          label: '300 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'Tata Consultancy: Foundation Course for GoLang in Web Services at ITPL, Bangalore',
          tags: [
            { title: 'Info', color: 'white', bgcolor: '#0288D1' },
            { title: 'Notifications', color: 'white', bgcolor: '#FF9800' },
          ]
        }
      ]
    },
    {
      id: 'ARCHIVED',
      title: 'Blocked',
      color: 'grey',
      label: '1/1',
      cards: [
        {
          id: 'Archived1',
          title: 'R3 Corda Trainer',
          label: '300 mins',
          cardStyle: {
            margin: 'auto',
            marginBottom: 5
          },
          description: 'MuSigma: Looking for R3 Corda Blockchain trainer in Bangalore',
          tags: [
            { title: 'UnMatched', color: 'white', bgcolor: 'grey' },
          ]
        }
      ]
    },
  ]
};

export default taskBoardData;
