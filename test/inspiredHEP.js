import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  @article{Chen:2014oha,
        author         = "Chen, Chien-Yi and Davoudiasl, Hooman and Kim, Doojin",
        title          = {Warped Graviton "Z + Missing Energy" Signal at Hadron
                          Colliders},
        journal        = "Phys.Rev.",
        volume         = "D89",
        pages          = "096007",
        doi            = "10.1103/PhysRevD.89.096007",
        year           = "2014",
        eprint         = "1403.3399",
        archivePrefix  = "arXiv",
        primaryClass   = "hep-ph",
        SLACcitation   = "%%CITATION = ARXIV:1403.3399;%%",
  }
`;

const output = [{citationKey:"Chen:2014oha",entryType:"article",entryTags:{author:"Chen, Chien-Yi and Davoudiasl, Hooman and Kim, Doojin",title:"Warped Graviton \"Z + Missing Energy\" Signal at Hadron\n                          Colliders",journal:"Phys.Rev.",volume:"D89",pages:"096007",doi:"10.1103/PhysRevD.89.096007",year:"2014",eprint:"1403.3399",archivePrefix:"arXiv",primaryClass:"hep-ph",SLACcitation:"%%CITATION = ARXIV:1403.3399;%%"}}]

test('InspiredHEP should parse', t => t.deepEqual(output, bibtexParse.toJSON(input)));
