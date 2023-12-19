import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

const worker = setupWorker(
  http.get(
    `${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/articles/1`,
    ({}) => {
      return HttpResponse.json(
        {
          id: 1,
          title: 'How to make a Blog in 10 steps or less! (Step 1)',
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Read my blog! :-) ',
                },
              ],
            },
          ],
          shortDescription: 'Blog #1',
          readTime: 1200,
          views: 2,
          createdAt: '2023-11-15T22:00:15.787Z',
          updatedAt: '2023-11-15T22:19:49.432Z',
          publishedAt: '2023-11-15T22:04:03.881Z',
        },
        {
          status: 200,
          statusText: 'OK',
        }
      );
    }
  ),
  http.get(`${process.env.NEXT_PUBLIC_STRAPI_ADMIN_URL}/api/articles`, ({}) => {
    return HttpResponse.json(
      {
        data: [
          {
            id: 1,
            attributes: {
              title: 'How to make a Blog in 10 steps or less! (Step 1)',
              content: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      text: 'Read my blog! :-) ',
                    },
                  ],
                },
              ],
              shortDescription: 'Blog #1',
              readTime: 1200,
              views: 4,
              createdAt: '2023-11-15T22:00:15.787Z',
              updatedAt: '2023-11-15T22:33:54.107Z',
              publishedAt: '2023-11-15T22:04:03.881Z',
            },
          },
        ],
        meta: {
          pagination: {
            page: 1,
            pageSize: 25,
            pageCount: 1,
            total: 1,
          },
        },
      },
      {
        status: 200,
        statusText: 'OK',
      }
    );
  })
);

worker.start();
