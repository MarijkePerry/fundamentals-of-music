// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-the-project",
    title: "the project",
    section: "Navigation",
    handler: () => {
      window.location.href = "/fundamentals-of-music/";
    },
  },{id: "nav-music-basics",
          title: "music basics",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/fundamentals-of-music/musicbasics/";
          },
        },{id: "nav-by-author",
          title: "by author",
          description: "A breakdown of the different tunings organized by attributed author",
          section: "Navigation",
          handler: () => {
            window.location.href = "/fundamentals-of-music/byauthor/";
          },
        },{id: "nav-by-genus",
          title: "by genus",
          description: "A breakdown of the different tunings organized by genera",
          section: "Navigation",
          handler: () => {
            window.location.href = "/fundamentals-of-music/bygenus/";
          },
        },{id: "nav-all-tunings",
          title: "all tunings",
          description: "A collection of every tuning on this site.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/fundamentals-of-music/alltunings/";
          },
        },{id: "nav-website-upkeep",
          title: "website upkeep",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/fundamentals-of-music/websiteupkeep/index.html";
          },
        },{id: "post-summary-of-work-last-week",
        
          title: "summary of work last week",
        
        description: "summary",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/fundamentals-of-music/blog/2025/summary-of-work-past-week/";
          
        },
      },{id: "post-by-authors-page-fixing",
        
          title: "by authors page fixing",
        
        description: "the tables live!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/fundamentals-of-music/blog/2025/the-tables-live/";
          
        },
      },{id: "post-audio-formatting-success",
        
          title: "audio formatting success!",
        
        description: "home stretch",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/fundamentals-of-music/blog/2025/audio-formatting-success/";
          
        },
      },{id: "post-figuring-out-audio-liquid",
        
          title: "figuring out audio.liquid",
        
        description: "wading through the liquid",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/fundamentals-of-music/blog/2025/figuring-out-audio-liquid/";
          
        },
      },{id: "post-short-work",
        
          title: "Short work",
        
        description: "recap of work done in an hour after session",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/fundamentals-of-music/blog/2025/short-work/";
          
        },
      },{id: "post-cleaning-up",
        
          title: "Cleaning Up",
        
        description: "summary of some weekend work",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/fundamentals-of-music/blog/2025/cleaning-up/";
          
        },
      },{id: "post-learning-the-site",
        
          title: "Learning the site",
        
        description: "coworking time update",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/fundamentals-of-music/blog/2025/learning-the-site/";
          
        },
      },{id: "projects-boethius-chromatic",
          title: 'Boethius - Chromatic',
          description: "full scale with diezeugmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_c_scale_full_d/";
            },},{id: "projects-boethius-chromatic",
          title: 'Boethius - Chromatic',
          description: "full scale with synemmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_c_scale_full_s/";
            },},{id: "projects-boethius-chromatic",
          title: 'Boethius - Chromatic',
          description: "disjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_c_tetra_dj/";
            },},{id: "projects-boethius-chromatic",
          title: 'Boethius - Chromatic',
          description: "conjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_c_tetra_j/";
            },},{id: "projects-boethius-chromatic",
          title: 'Boethius - Chromatic',
          description: "individual tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_c_tetra_solo/";
            },},{id: "projects-boethius-diatonic",
          title: 'Boethius - Diatonic',
          description: "full scale with diezeugmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_d_scale_full_d/";
            },},{id: "projects-boethius-diatonic",
          title: 'Boethius - Diatonic',
          description: "full scale with synemmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_d_scale_full_s/";
            },},{id: "projects-boethius-diatonic",
          title: 'Boethius - Diatonic',
          description: "disjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_d_tetra_dj/";
            },},{id: "projects-boethius-diatonic",
          title: 'Boethius - Diatonic',
          description: "conjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_d_tetra_j/";
            },},{id: "projects-boethius-diatonic",
          title: 'Boethius - Diatonic',
          description: "individual tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_d_tetra_solo/";
            },},{id: "projects-boethius-enharmonic",
          title: 'Boethius - Enharmonic',
          description: "full scale with diezeugmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_e_scale_full_d/";
            },},{id: "projects-boethius-enharmonic",
          title: 'Boethius - Enharmonic',
          description: "full scale with synemmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_e_scale_full_s/";
            },},{id: "projects-boethius-enharmonic",
          title: 'Boethius - Enharmonic',
          description: "disjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_e_tetra_dj/";
            },},{id: "projects-boethius-enharmonic",
          title: 'Boethius - Enharmonic',
          description: "conjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_e_tetra_j/";
            },},{id: "projects-boethius-enharmonic",
          title: 'Boethius - Enharmonic',
          description: "individual tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/b_e_tetra_solo/";
            },},{id: "projects-aristoxenus-enharmonic",
          title: 'Aristoxenus - Enharmonic',
          description: "full scale with diezeugmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_e_scale_full_d/";
            },},{id: "projects-aristoxenus-enharmonic",
          title: 'Aristoxenus - Enharmonic',
          description: "full scale with synemmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_e_scale_full_s/";
            },},{id: "projects-aristoxenus-enharmonic",
          title: 'Aristoxenus - Enharmonic',
          description: "disjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_e_tetra_dj/";
            },},{id: "projects-aristoxenus-enharmonic",
          title: 'Aristoxenus - Enharmonic',
          description: "conjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_e_tetra_j/";
            },},{id: "projects-aristoxenus-enharmonic",
          title: 'Aristoxenus - Enharmonic',
          description: "individual tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_e_tetra_solo/";
            },},{id: "projects-aristoxenus-hemiolic-chromatic",
          title: 'Aristoxenus - Hemiolic Chromatic',
          description: "full scale with diezeugmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_hc_scale_full_d/";
            },},{id: "projects-aristoxenus-hemiolic-chromatic",
          title: 'Aristoxenus - Hemiolic Chromatic',
          description: "full scale with synemmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_hc_scale_full_s/";
            },},{id: "projects-aristoxenus-hemiolic-chromatic",
          title: 'Aristoxenus - Hemiolic Chromatic',
          description: "disjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_hc_tetra_dj/";
            },},{id: "projects-aristoxenus-hemiolic-chromatic",
          title: 'Aristoxenus - Hemiolic Chromatic',
          description: "conjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_hc_tetra_j/";
            },},{id: "projects-aristoxenus-hemiolic-chromatic",
          title: 'Aristoxenus - Hemiolic Chromatic',
          description: "individual tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_hc_tetra_solo/";
            },},{id: "projects-aristoxenus-soft-chromatic",
          title: 'Aristoxenus - Soft Chromatic',
          description: "full scale with diezeugmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_sc_scale_full_d/";
            },},{id: "projects-aristoxenus-soft-chromatic",
          title: 'Aristoxenus - Soft Chromatic',
          description: "full scale with synemmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_sc_scale_full_s/";
            },},{id: "projects-aristoxenus-soft-chromatic",
          title: 'Aristoxenus - Soft Chromatic',
          description: "disjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_sc_tetra_dj/";
            },},{id: "projects-aristoxenus-soft-chromatic",
          title: 'Aristoxenus - Soft Chromatic',
          description: "conjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_sc_tetra_j/";
            },},{id: "projects-aristoxenus-soft-chromatic",
          title: 'Aristoxenus - Soft Chromatic',
          description: "individual tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_sc_tetra_solo/";
            },},{id: "projects-aristoxenus-sharp-diatonic",
          title: 'Aristoxenus - Sharp Diatonic',
          description: "full scale with diezeugmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_shd_scale_full_d/";
            },},{id: "projects-aristoxenus-sharp-diatonic",
          title: 'Aristoxenus - Sharp Diatonic',
          description: "full scale with synemmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_shd_scale_full_s/";
            },},{id: "projects-aristoxenus-sharp-diatonic",
          title: 'Aristoxenus - Sharp Diatonic',
          description: "disjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_shd_tetra_dj/";
            },},{id: "projects-aristoxenus-sharp-diatonic",
          title: 'Aristoxenus - Sharp Diatonic',
          description: "conjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_shd_tetra_j/";
            },},{id: "projects-aristoxenus-sharp-diatonic",
          title: 'Aristoxenus - Sharp Diatonic',
          description: "individual tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_shd_tetra_solo/";
            },},{id: "projects-aristoxenus-soft-diatonic",
          title: 'Aristoxenus - Soft Diatonic',
          description: "full scale with diezeugmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_sod_scale_full_d/";
            },},{id: "projects-aristoxenus-soft-diatonic",
          title: 'Aristoxenus - Soft Diatonic',
          description: "full scale with synemmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_sod_scale_full_s/";
            },},{id: "projects-aristoxenus-soft-diatonic",
          title: 'Aristoxenus - Soft Diatonic',
          description: "disjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_sod_tetra_dj/";
            },},{id: "projects-aristoxenus-soft-diatonic",
          title: 'Aristoxenus - Soft Diatonic',
          description: "conjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_sod_tetra_j/";
            },},{id: "projects-aristoxenus-soft-diatonic",
          title: 'Aristoxenus - Soft Diatonic',
          description: "individual tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_sod_tetra_solo/";
            },},{id: "projects-aristoxenus-tonic-chromatic",
          title: 'Aristoxenus - Tonic Chromatic',
          description: "full scale with diezeugmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_tc_scale_full_d/";
            },},{id: "projects-aristoxenus-tonic-chromatic",
          title: 'Aristoxenus - Tonic Chromatic',
          description: "full scale with synemmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_tc_scale_full_s/";
            },},{id: "projects-aristoxenus-tonic-chromatic",
          title: 'Aristoxenus - Tonic Chromatic',
          description: "disjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_tc_tetra_dj/";
            },},{id: "projects-aristoxenus-tonic-chromatic",
          title: 'Aristoxenus - Tonic Chromatic',
          description: "conjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_tc_tetra_j/";
            },},{id: "projects-aristoxenus-tonic-chromatic",
          title: 'Aristoxenus - Tonic Chromatic',
          description: "individual tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/x_tc_tetra_solo/";
            },},{id: "projects-archytas-chromatic",
          title: 'Archytas - Chromatic',
          description: "full scale with diezeugmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_c_scale_dull_d/";
            },},{id: "projects-archytas-chromatic",
          title: 'Archytas - Chromatic',
          description: "full scale with synemmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_c_scale_full_s/";
            },},{id: "projects-archytas-chromatic",
          title: 'Archytas - Chromatic',
          description: "disjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_c_tetra_dj/";
            },},{id: "projects-archytas-chromatic",
          title: 'Archytas - Chromatic',
          description: "conjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_c_tetra_j/";
            },},{id: "projects-archytas-chromatic",
          title: 'Archytas - Chromatic',
          description: "individual tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_c_tetra_solo/";
            },},{id: "projects-archytas-diatonic",
          title: 'Archytas - Diatonic',
          description: "full scale with diezeugmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_d_scale_full_d/";
            },},{id: "projects-archytas-diatonic",
          title: 'Archytas - Diatonic',
          description: "full scale with synemmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_d_scale_full_s/";
            },},{id: "projects-archytas-diatonic",
          title: 'Archytas - Diatonic',
          description: "disjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_d_tetra_dj/";
            },},{id: "projects-archytas-diatonic",
          title: 'Archytas - Diatonic',
          description: "conjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_d_tetra_j/";
            },},{id: "projects-archytas-diatonic",
          title: 'Archytas - Diatonic',
          description: "individual tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_d_tetra_solo/";
            },},{id: "projects-archytas-enharmonic",
          title: 'Archytas - Enharmonic',
          description: "full scale with diezeugmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_e_scale_full_d/";
            },},{id: "projects-archytas-enharmonic",
          title: 'Archytas - Enharmonic',
          description: "full scale with synemmenon tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_e_scale_full_s/";
            },},{id: "projects-archytas-enharmonic",
          title: 'Archytas - Enharmonic',
          description: "disjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_e_tetra_dj/";
            },},{id: "projects-archytas-enharmonic",
          title: 'Archytas - Enharmonic',
          description: "conjunct tetrachords",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_e_tetra_j/";
            },},{id: "projects-archytas-enharmonic",
          title: 'Archytas - Enharmonic',
          description: "individual tetrachord",
          section: "Projects",handler: () => {
              window.location.href = "/fundamentals-of-music/projects/y_e_tetra_solo/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
