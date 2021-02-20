export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6031631fcb9becc691cb9e61',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-k54mrtgj',
                  apiId: 'dd75ac94-868a-421f-8981-4ecdad538cfb'
                },
                {
                  buildHookId: '6031631f258d662ba8220bec',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-esg7q84v',
                  apiId: 'e4590e3a-7b59-49f8-a2df-5d1fcf110487'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/samuelsycamore/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-esg7q84v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
