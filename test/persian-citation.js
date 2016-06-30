import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  @article{داودی2015بررسی,
    title={بررسی مکانیزمهای سایش و عمر ابزار در تراشکاری سوپرآلیاژ پایه آهن-نیکل N-155 },
    author={داودی, بهنام and بهنام and اسکندری and بهزاد},
    journal={مهندسی مکانیک مدرس},
    volume={14},
    pages={51--58},
    year={2015}
  }
`;

const output = [ { citationKey: 'داودی2015بررسی',
    entryType: 'article',
    entryTags:
     { title: 'بررسی مکانیزمهای سایش و عمر ابزار در تراشکاری سوپرآلیاژ پایه آهن-نیکل N-155 ',
       author: 'داودی, بهنام and بهنام and اسکندری and بهزاد',
       journal: 'مهندسی مکانیک مدرس',
       volume: '14',
       pages: '51--58',
       year: '2015' } } ]

test('Persian should work', t => t.deepEqual(output, bibtexParse.toJSON(input)));
