const chapters = [
  {
    id: "bab1",
    name: "Bab 1: Mengenali Sejarah",
    topics: [
      {
        id: "1-1-pengertian-sejarah",
        name: "1.1 Pengertian Sejarah",
        summary: "Topik ini menerangkan pengertian sejarah sebagai kajian tentang masa lalu dan bagaimana peristiwa lama membentuk masyarakat hari ini.",
        summary_en: "This topic explains the meaning of history as the study of the past and how past events shape society today.",
        facts: [
          "Sejarah ialah kajian tentang peristiwa, manusia, dan keadaan pada masa lalu.",
          "Sejarah membantu menjelaskan bagaimana masyarakat berubah dari masa ke masa.",
          "Pengertian sejarah boleh berbeza tetapi biasanya berkaitan dengan bukti dan interpretasi masa lalu.",
          "Sejarah melibatkan kajian masa silam untuk memahami masa kini dan masa depan.",
          "Kajian sejarah memerlukan sumber seperti dokumen, artifak, dan cerita lisan."
        ],
        facts_en: [
          "History is the study of events, people, and conditions in the past.",
          "History helps explain how societies change over time.",
          "The meaning of history can vary but usually relates to evidence and interpretation of the past.",
          "History involves studying the past to understand the present and the future.",
          "Historical study requires sources such as documents, artifacts, and oral stories."
        ],
        quiz: [
          {
            question: "Apakah maksud sejarah? / What is the meaning of history?",
            choices: [
              "Kajian tentang masa lalu dan peristiwa penting. / Study of the past and important events.",
              "Kajian tentang masa depan. / Study of the future.",
              "Kajian tentang sains sahaja. / Study of science only.",
              "Kajian tentang muzik sahaja. / Study of music only."
            ],
            answer: "Kajian tentang masa lalu dan peristiwa penting. / Study of the past and important events."
          },
          {
            question: "Mengapakah sejarah penting? / Why is history important?",
            choices: [
              "Untuk memahami perubahan masyarakat dan identiti bangsa. / To understand social change and national identity.",
              "Untuk menonton filem. / To watch movies.",
              "Untuk bermain permainan video. / To play video games.",
              "Untuk memasak makanan. / To cook food."
            ],
            answer: "Untuk memahami perubahan masyarakat dan identiti bangsa. / To understand social change and national identity."
          },
          {
            type: "objective",
            question: "Jelaskan satu sebab mengapa sejarah penting bagi generasi muda. / Explain one reason why history is important for young people.",
            answer: "Sejarah membantu generasi muda belajar daripada kesilapan lalu dan membuat keputusan yang lebih baik untuk masa depan. / History helps young people learn from past mistakes and make better decisions for the future."
          }
        ]
      },
      {
        id: "1-2-pengertian-sejarah-sejarawan",
        name: "1.2 Pengertian Sejarah Mengikut Pandangan Sejarawan",
        summary: "Topik ini menerangkan bahawa sejarawan memberikan definisi sejarah berdasarkan penemuan bukti, tafsiran, dan perspektif masa lalu.",
        summary_en: "This topic explains that historians define history based on evidence, interpretation, and past perspectives.",
        facts: [
          "Sejarawan mengkaji dokumen, catatan, dan bukti lain untuk membina pemahaman tentang masa lalu.",
          "Sejarawan sering menemui dokumen lama, catatan rasmi dan artifak yang membuka maklumat baharu tentang kehidupan masyarakat dahulu.",
          "Penemuan catatan sejarah seperti surat, prasasti atau laporan rasmi membantu ahli sejarah membina semula peristiwa dengan lebih tepat.",
          "Pendekatan sejarawan membantu menjelaskan bagaimana peristiwa dan manusia dikaji secara sistematik.",
          "Sejarah bukan sekadar cerita, tetapi satu proses analisis bukti untuk membuat kesimpulan.",
          "Ahli sejarah menggunakan sumber primer dan sekunder untuk memahami konteks peristiwa."
        ],
        facts_en: [
          "Historians study documents, records, and other evidence to build an understanding of the past.",
          "Historians often discover old documents, official records, and artifacts that reveal new information about past societies.",
          "Findings such as letters, inscriptions, or official reports help historians reconstruct events more accurately.",
          "A historian's approach helps explain how events and people are studied systematically.",
          "History is not just stories, but a process of analyzing evidence to draw conclusions.",
          "Historians use primary and secondary sources to understand the context of events."
        ],
        persons: [
          {
            name: "Ibn Khaldun",
            role: "Sejarawan dan ahli falsafah",
            description: "Dikenali sebagai bapa sejarah moden kerana konsep 'ilm al-umran' dan analisis sosiologi sejarah, serta meneliti pola perubahan masyarakat.",
            description_en: "Known as the father of modern history for his 'ilm al-umran' concept and sociological analysis of history, as well as studying patterns of social change."
          }
        ],
        quiz: [
          {
            question: "Apakah yang digunakan sejarawan untuk mengkaji sejarah? / What do historians use to study history?",
            choices: [
              "Dokumen, artifak, dan sumber lisan. / Documents, artifacts, and oral sources.",
              "Hanya gambar moden. / Only modern pictures.",
              "Hanya filem. / Only movies.",
              "Hanya lagu. / Only songs."
            ],
            answer: "Dokumen, artifak, dan sumber lisan. / Documents, artifacts, and oral sources."
          },
          {
            question: "Mengapa definisi sejarah berbeza antara sejarawan? / Why do definitions of history vary among historians?",
            choices: [
              "Kerana setiap sejarawan menggunakan perspektif dan bukti yang berbeza. / Because each historian uses different perspectives and evidence.",
              "Kerana sejarah tidak penting. / Because history is not important.",
              "Kerana semua orang bergurau. / Because everyone is joking.",
              "Kerana ia bergantung pada cuaca. / Because it depends on the weather."
            ],
            answer: "Kerana setiap sejarawan menggunakan perspektif dan bukti yang berbeza. / Because each historian uses different perspectives and evidence."
          },
          {
            type: "objective",
            question: "Berikan satu contoh bukti yang boleh mengubah tafsiran sejarah. / Give one example of evidence that can change historical interpretation.",
            answer: "Penemuan dokumen baru atau artifak arkeologi boleh mengubah cara sejarawan mentafsir peristiwa lalu. / The discovery of a new document or archaeological artifact can change how historians interpret past events."
          }
        ]
      },
      {
        id: "1-3-masa-silam-ruang",
        name: "1.3 Masa Silam dan Ruang dalam Sejarah",
        summary: "Topik ini menerangkan konsep masa dan ruang dalam sejarah, iaitu bagaimana peristiwa berlaku dalam konteks waktu dan tempat tertentu.",
        summary_en: "This topic explains the concepts of time and space in history, meaning how events occur within a specific time and place.",
        facts: [
          "Masa merujuk kepada jangka waktu di mana peristiwa berlaku.",
          "Ruang merujuk kepada lokasi atau tempat di mana peristiwa berlaku.",
          "Analisis sejarah memerlukan pemahaman tentang hubungan antara masa dan ruang.",
          "Sejarah boleh menunjukkan perubahan dalam masyarakat pada waktu dan tempat tertentu.",
          "Peristiwa sejarah mesti ditempatkan dalam konteks masa dan ruang yang betul."
        ],
        facts_en: [
          "Time refers to the period during which events happen.",
          "Space refers to the location or place where events occur.",
          "Historical analysis requires understanding the relationship between time and space.",
          "History can show changes in society at particular times and places.",
          "Historical events must be placed in the correct time and space context."
        ],
        quiz: [
          {
            question: "Apakah maksud ruang dalam sejarah? / What does space mean in history?",
            choices: [
              "Tempat atau lokasi di mana peristiwa berlaku. / The place or location where events occur.",
              "Masa yang lalu. / The past time.",
              "Alat muzik. / Musical instruments.",
              "Jenis makanan. / Types of food."
            ],
            answer: "Tempat atau lokasi di mana peristiwa berlaku. / The place or location where events occur."
          },
          {
            question: "Apakah yang ditunjukkan oleh konsep masa dalam sejarah? / What does the concept of time in history show?",
            choices: [
              "Perubahan dalam masyarakat dan peristiwa sepanjang tempoh tertentu. / Changes in society and events over a certain period.",
              "Jenis pakaian sahaja. / Only types of clothing.",
              "Tumbuhan sahaja. / Only plants.",
              "Haiwan sahaja. / Only animals."
            ],
            answer: "Perubahan dalam masyarakat dan peristiwa sepanjang tempoh tertentu. / Changes in society and events over a certain period."
          },
          {
            type: "objective",
            question: "Nyatakan maksud ruang dalam sejarah dalam satu ayat. / State the meaning of space in history in one sentence.",
            answer: "Ruang dalam sejarah merujuk kepada lokasi atau tempat di mana peristiwa berlaku. / Space in history refers to the location or place where events occur."
          }
        ]
      },
      {
        id: "1-4-sumber-sejarah",
        name: "1.4 Sumber Sejarah",
        summary: "Topik ini membincangkan jenis sumber sejarah seperti sumber bertulis, lisan, dan artifak yang membantu kita memahami masa lalu.",
        summary_en: "This topic discusses types of historical sources such as written, oral, and artifact sources that help us understand the past.",
        facts: [
          "Sumber sejarah adalah bahan yang memberi maklumat tentang masa lalu.",
          "Sumber primer ialah bahan asal yang dibuat semasa peristiwa berlaku, seperti dokumen rasmi, surat, atau artifak.",
          "Sumber sekunder ialah kajian atau ulasan tentang masa lalu yang ditulis kemudian, seperti buku sejarah dan artikel.",
          "Sumber bertulis, lisan, dan artifak boleh menjadi primer atau sekunder bergantung pada bagaimana ia digunakan.",
          "Ahli sejarah mengutamakan sumber primer untuk bukti langsung dan menggunakan sumber sekunder untuk konteks dan tafsiran."
        ],
        facts_en: [
          "Historical sources are materials that provide information about the past.",
          "Primary sources are original materials created during the event, such as official documents, letters, or artifacts.",
          "Secondary sources are studies or reviews of the past written later, such as history books or articles.",
          "Written, oral, and artifact sources can be primary or secondary depending on how they are used.",
          "Historians prioritize primary sources for direct evidence and use secondary sources for context and interpretation."
        ],
        persons: [
          {
            name: "Herodotus",
            role: "Sejarawan Yunani",
            description: "Dikenali sebagai bapa sejarah Barat kerana menulis tentang Perang Parsi dan mengumpul sumber dari banyak tempat.",
            description_en: "Known as the father of Western history for writing about the Persian Wars and collecting sources from many places."
          }
        ],
        quiz: [
          {
            question: "Apakah contoh sumber lisan? / What is an example of an oral source?",
            choices: [
              "Wawancara dan cerita rakyat. / Interviews and folk tales.",
              "Gambar moden. / Modern pictures.",
              "Surat rasmi. / Official letters.",
              "Basikal. / Bicycle."
            ],
            answer: "Wawancara dan cerita rakyat. / Interviews and folk tales."
          },
          {
            question: "Mengapakah artifak penting sebagai sumber sejarah? / Why are artifacts important as historical sources?",
            choices: [
              "Kerana ia menunjukkan cara hidup dan budaya masyarakat dahulu. / Because it shows how people lived and their culture.",
              "Kerana ia membuat makanan. / Because it makes food.",
              "Kerana ia menari. / Because it dances.",
              "Kerana ia mengajar sains. / Because it teaches science."
            ],
            answer: "Kerana ia menunjukkan cara hidup dan budaya masyarakat dahulu. / Because it shows how people lived and their culture."
          },
          {
            type: "objective",
            question: "Apakah perbezaan utama antara sumber bertulis dan sumber lisan? / What is the main difference between written sources and oral sources?",
            answer: "Sumber bertulis direkodkan dalam bentuk dokumen, manakala sumber lisan disampaikan melalui cerita atau ucapan. / Written sources are recorded in documents, while oral sources are delivered through stories or speech."
          }
        ]
      },
      {
        id: "1-5-penyelidikan-dalam-sejarah",
        name: "1.5 Penyelidikan dalam Sejarah",
        summary: "Topik ini menjelaskan kaedah penyelidikan sejarah seperti kaedah bertulis, kaedah lisan, dan kaedah arkeologi untuk mengumpulkan maklumat tentang masa lalu.",
        summary_en: "This topic explains historical research methods like written, oral, and archaeological methods for gathering information about the past.",
        facts: [
          "Penyelidikan sejarah menggunakan dokumen bertulis untuk mencari bukti masa lalu.",
          "Kaedah lisan melibatkan wawancara dan cerita tradisi.",
          "Kaedah arkeologi menganalisis artifak dan struktur yang ditemui.",
          "Gabungan beberapa kaedah membantu menghasilkan kajian sejarah yang lebih lengkap.",
          "Penyelidikan sejarah memerlukan ketelitian dalam menilai kesahihan sumber."
        ],
        facts_en: [
          "Historical research uses written documents to find evidence of the past.",
          "Oral methods involve interviews and traditional stories.",
          "Archaeological methods analyze artifacts and structures that are found.",
          "Combining several methods helps produce more complete historical research.",
          "Historical research requires care in assessing the validity of sources."
        ],
        quiz: [
          {
            question: "Apakah kaedah penyelidikan yang menggunakan artifak? / Which research method uses artifacts?",
            choices: [
              "Kaedah arkeologi. / Archaeological method.",
              "Kaedah lisan. / Oral method.",
              "Kaedah bertulis. / Written method.",
              "Kaedah sains. / Science method."
            ],
            answer: "Kaedah arkeologi. / Archaeological method."
          },
          {
            question: "Apakah tujuan kaedah bertulis dalam sejarah? / What is the purpose of written methods in history?",
            choices: [
              "Untuk menggunakan dokumen dan rekod sebagai bukti. / To use documents and records as evidence.",
              "Untuk bermain permainan. / To play games.",
              "Untuk menyanyi. / To sing.",
              "Untuk melukis. / To paint."
            ],
            answer: "Untuk menggunakan dokumen dan rekod sebagai bukti. / To use documents and records as evidence."
          },
          {
            type: "objective",
            question: "Mengapa kaedah arkeologi penting dalam penyelidikan sejarah? / Why is the archaeological method important in historical research?",
            answer: "Kerana ia membolehkan ahli sejarah menemui bukti fizikal daripada masa lalu yang tidak terdapat dalam dokumen bertulis. / Because it allows historians to find physical evidence from the past that is not available in written documents."
          }
        ]
      }
    ]
  },
  {
    id: "bab2",
    name: "Bab 2: Zaman Air Batu",
    topics: [
      {
        id: "2-1-dunia-kita",
        name: "2.1 Dunia Kita",
        summary: "Topik ini menerangkan bentuk fizikal Bumi, kawasan daratan, lautan, dan bagaimana alam sekitar membentuk kehidupan manusia.",
        summary_en: "This topic explains the physical form of Earth, land areas, seas, and how the environment shapes human life.",
        facts: [
          "Bumi terdiri daripada kawasan daratan, lautan, gunung, dan kawasan sejuk.",
          "Pembentukan fizikal Bumi mempengaruhi taburan haiwan, tumbuhan, dan manusia.",
          "Lautan dan daratan menjadi penanda arah pergerakan manusia dan perdagangan.",
          "Perubahan bentuk muka bumi menghasilkan perbezaan iklim dan sumber makanan.",
          "Pengetahuan tentang dunia membantu kita memahami perubahan alam sekitar."
        ],
        facts_en: [
          "Earth consists of land, oceans, mountains, and cold regions.",
          "Earth's physical formation affects the distribution of animals, plants, and humans.",
          "Oceans and land became routes for movement and trade.",
          "Changes in the landscape created differences in climate and food sources.",
          "Knowledge about the world helps us understand environmental change."
        ],
        quiz: [
          {
            question: "Apakah dua unsur utama yang membentuk permukaan Bumi? / What are the two main elements that shape the surface of Earth?",
            choices: [
              "Daratan dan lautan. / Land and oceans.",
              "Awan dan hujan. / Clouds and rain.",
              "Rumah dan jalan raya. / Houses and roads.",
              "Kertas dan pensel. / Paper and pencils."
            ],
            answer: "Daratan dan lautan. / Land and oceans."
          },
          {
            question: "Mengapakah bentuk fizikal Bumi penting dalam sejarah? / Why is the physical form of Earth important in history?",
            choices: [
              "Kerana ia mempengaruhi kehidupan manusia dan taburan sumber. / Because it affects human life and resource distribution.",
              "Kerana ia melibatkan permainan komputer. / Because it involves computer games.",
              "Kerana ia hanya untuk ilmu geografi moden. / Because it is only for modern geography.",
              "Kerana ia tidak memberi kesan apa-apa. / Because it has no effect."
            ],
            answer: "Kerana ia mempengaruhi kehidupan manusia dan taburan sumber. / Because it affects human life and resource distribution."
          },
          {
            type: "objective",
            question: "Nyatakan satu sebab mengapa lautan penting dalam kehidupan manusia. / State one reason why oceans are important to human life.",
            answer: "Lautan menyediakan laluan pergerakan, sumber makanan, dan penghubung antara kawasan. / Oceans provide routes of movement, food sources, and links between regions."
          }
        ]
      },
      {
        id: "2-2-zaman-air-batu",
        name: "2.2 Zaman Air Batu",
        summary: "Topik ini menerangkan konsep zaman air batu, iaitu tempoh ketika suhu Bumi menjadi lebih sejuk dan kawasan besar dilitupi ais.",
        summary_en: "This topic explains the concept of the Ice Age, a period when Earth's temperature became colder and large areas were covered by ice.",
        facts: [
          "Zaman air batu ialah tempoh cuaca sejuk yang meliputi kawasan besar di Bumi.",
          "Semasa zaman air batu, banyak kawasan yang kini panas menjadi sejuk dan dilitupi ais.",
          "Kitaran perubahan suhu menyebabkan zon ais berkembang dan surut secara berulang.",
          "Perubahan suhu ini memberi kesan besar kepada tumbuhan, haiwan, dan manusia.",
          "Zaman air batu membentuk landskap, sungai, dan bentuk muka bumi yang kita lihat hari ini."
        ],
        facts_en: [
          "The Ice Age was a period of cold weather that covered large areas of Earth.",
          "During the Ice Age, many areas that are now warm became cold and covered with ice.",
          "Cycles of temperature change caused ice zones to expand and shrink repeatedly.",
          "These temperature changes had major effects on plants, animals, and humans.",
          "The Ice Age shaped landscapes, rivers, and landforms that we see today."
        ],
        quiz: [
          {
            question: "Apakah yang dimaksudkan dengan zaman air batu? / What is meant by the Ice Age?",
            choices: [
              "Tempoh cuaca sejuk yang meliputi kawasan besar. / A period of cold weather covering large areas.",
              "Tempoh cuaca panas yang berterusan. / A continuous hot weather period.",
              "Tempoh hujan yang sangat lebat. / A period of very heavy rain.",
              "Tempoh banjir besar. / A period of major flooding."
            ],
            answer: "Tempoh cuaca sejuk yang meliputi kawasan besar. / A period of cold weather covering large areas."
          },
          {
            question: "Mengapakah zaman air batu penting dalam sejarah alam sekitar? / Why is the Ice Age important in environmental history?",
            choices: [
              "Kerana ia mengubah landskap dan taburan hidupan. / Because it changed landscapes and the distribution of life.",
              "Kerana ia membina bangunan moden. / Because it built modern buildings.",
              "Kerana ia menghasilkan elektrik. / Because it produced electricity.",
              "Kerana ia tidak memberi kesan. / Because it had no impact."
            ],
            answer: "Kerana ia mengubah landskap dan taburan hidupan. / Because it changed landscapes and the distribution of life."
          },
          {
            type: "objective",
            question: "Nyatakan satu kesan zaman air batu terhadap alam sekitar. / State one effect of the Ice Age on the environment.",
            answer: "Ia menyebabkan kawasan besar dilitupi ais dan mengubah bentuk muka bumi. / It caused large areas to be covered with ice and changed the landforms."
          }
        ]
      },
      {
        id: "2-3-garis-masa-zaman-air-batu",
        name: "2.3 Garis Masa Zaman Air Batu",
        summary: "Topik ini menerangkan garis masa zaman air batu dan perubahan suhu yang berlaku secara berperingkat.",
        summary_en: "This topic explains the timeline of the Ice Age and the gradual changes in temperature that took place.",
        facts: [
          "Garis masa menunjukkan perubahan suhu dari masa ke masa.",
          "Pada tahap tertentu, suhu menurun lalu ais berkembang di kawasan tertentu.",
          "Pada tahap lain, suhu meningkat lalu ais mula surut.",
          "Perubahan ini berlaku berulang dan mengambil masa yang sangat lama.",
          "Garis masa membantu kita memahami urutan perubahan geografi dan iklim."
        ],
        facts_en: [
          "The timeline shows changes in temperature over time.",
          "At certain points, temperatures dropped and ice expanded in some regions.",
          "At other points, temperatures rose and ice began to retreat.",
          "These changes occurred repeatedly over a very long period.",
          "The timeline helps us understand the sequence of geographic and climatic changes."
        ],
        quiz: [
          {
            question: "Mengapakah garis masa penting dalam mempelajari zaman air batu? / Why is a timeline important in studying the Ice Age?",
            choices: [
              "Kerana ia membantu melihat urutan perubahan secara berperingkat. / Because it helps show the sequence of changes step by step.",
              "Kerana ia hanya menunjukkan tarikh moden. / Because it only shows modern dates.",
              "Kerana ia tidak mempunyai kaitan. / Because it is irrelevant.",
              "Kerana ia hanya untuk matematik. / Because it is only for mathematics."
            ],
            answer: "Kerana ia membantu melihat urutan perubahan secara berperingkat. / Because it helps show the sequence of changes step by step."
          },
          {
            question: "Apakah yang berlaku apabila suhu menurun? / What happens when temperatures drop?",
            choices: [
              "Ais berkembang di kawasan tertentu. / Ice expands in some areas.",
              "Lautan menjadi kering sepenuhnya. / The oceans dry up completely.",
              "Semua kawasan menjadi panas. / All regions become hot.",
              "Hutan tumbuh dengan cepat. / Forests grow quickly."
            ],
            answer: "Ais berkembang di kawasan tertentu. / Ice expands in some areas."
          },
          {
            type: "objective",
            question: "Nyatakan satu perubahan yang dapat dilihat dalam garis masa zaman air batu. / State one change that can be seen in the Ice Age timeline.",
            answer: "Suhu berubah secara berulang dan menyebabkan ais berkembang serta surut. / Temperature changed repeatedly and caused ice to expand and retreat."
          }
        ]
      },
      {
        id: "2-4-ciri-ciri-zaman-air-batu-akhir",
        name: "2.4 Ciri-ciri Zaman Air Batu Akhir",
        summary: "Topik ini membincangkan ciri-ciri utama zaman air batu akhir, termasuk kawasan ais, tumbuhan sejuk, dan perubahan cuaca yang ketara.",
        summary_en: "This topic discusses the main features of the late Ice Age, including ice-covered areas, cold plants, and significant weather changes.",
        facts: [
          "Zaman air batu akhir ditandai dengan kawasan ais yang luas dan suhu yang sangat sejuk.",
          "Tumbuhan yang tahan sejuk lebih dominan di kawasan tertentu.",
          "Haiwan seperti mamalia besar dapat bertahan di kawasan sejuk.",
          "Bentuk muka bumi berubah akibat hakisan dan pemendapan ais.",
          "Kawasan yang kini subur mungkin berubah menjadi tundra atau padang sejuk."
        ],
        facts_en: [
          "The late Ice Age was marked by vast ice-covered regions and very cold temperatures.",
          "Cold-tolerant plants became more dominant in some areas.",
          "Animals such as large mammals could survive in cold regions.",
          "The landscape changed due to erosion and deposition by ice.",
          "Areas that are now fertile may have become tundra or cold grasslands."
        ],
        quiz: [
          {
            question: "Apakah ciri utama zaman air batu akhir? / What was a main feature of the late Ice Age?",
            choices: [
              "Suhu yang sangat sejuk dan kawasan ais yang luas. / Very cold temperatures and extensive ice coverage.",
              "Suhu panas sepanjang masa. / Constant hot temperatures.",
              "Lautan yang sangat kecil. / Very small oceans.",
              "Hutan tropika yang sangat tebal. / Very thick tropical forests."
            ],
            answer: "Suhu yang sangat sejuk dan kawasan ais yang luas. / Very cold temperatures and extensive ice coverage."
          },
          {
            question: "Mengapakah tumbuhan sejuk penting semasa zaman air batu akhir? / Why were cold plants important during the late Ice Age?",
            choices: [
              "Kerana ia membantu menyesuaikan ekosistem dengan cuaca sejuk. / Because they helped ecosystems adapt to cold weather.",
              "Kerana ia menghalang semua haiwan hidup. / Because they prevented all animals from living.",
              "Kerana ia menjadikan kawasan lebih panas. / Because they made areas hotter.",
              "Kerana ia tidak mempunyai sebarang fungsi. / Because they had no function."
            ],
            answer: "Kerana ia membantu menyesuaikan ekosistem dengan cuaca sejuk. / Because they helped ecosystems adapt to cold weather."
          },
          {
            type: "objective",
            question: "Nyatakan satu ciri tumbuhan atau haiwan semasa zaman air batu akhir. / State one feature of plants or animals during the late Ice Age.",
            answer: "Tumbuhan dan haiwan yang tahan sejuk lebih dominan dan dapat bertahan dalam iklim sejuk. / Cold-tolerant plants and animals were more dominant and able to survive in cold climates."
          }
        ]
      },
      {
        id: "2-5-perubahan-zaman-air-batu-akhir",
        name: "2.5 Perubahan Zaman Air Batu Akhir",
        summary: "Topik ini menerangkan perubahan bentuk muka bumi dan paras laut akibat penyejukan dan pencairan ais.",
        summary_en: "This topic explains changes in landforms and sea level caused by cooling and melting ice.",
        facts: [
          "Perubahan iklim menyebabkan paras laut berubah dari masa ke masa.",
          "Penyejukan menyebabkan laut berkurang dan kawasan daratan terdedah.",
          "Pencairan ais pula meningkatkan paras laut dan mengubah pantai.",
          "Perubahan ini mempengaruhi habitat manusia dan haiwan.",
          "Landskap yang berubah membentuk laluan baru untuk pergerakan manusia."
        ],
        facts_en: [
          "Climate change caused sea levels to change over time.",
          "Cooling caused the sea to shrink and exposed more land.",
          "Melting ice raised sea levels and changed coastlines.",
          "These changes affected the habitats of humans and animals.",
          "The changing landscape created new routes for human movement."
        ],
        quiz: [
          {
            question: "Apakah yang berlaku apabila ais mencair? / What happens when ice melts?",
            choices: [
              "Paras laut meningkat. / Sea levels rise.",
              "Semua kawasan menjadi beku. / All areas become frozen.",
              "Hutan hilang sepenuhnya. / Forests disappear completely.",
              "Tiada perubahan berlaku. / No change occurs."
            ],
            answer: "Paras laut meningkat. / Sea levels rise."
          },
          {
            question: "Mengapakah perubahan paras laut penting kepada manusia? / Why are changes in sea level important to humans?",
            choices: [
              "Kerana ia mengubah kawasan penempatan dan sumber makanan. / Because it changes settlement areas and food sources.",
              "Kerana ia hanya menjejaskan haiwan laut. / Because it only affects marine animals.",
              "Kerana ia membuat cuaca lebih sejuk. / Because it makes the weather colder.",
              "Kerana ia mencipta mesin moden. / Because it creates modern machines."
            ],
            answer: "Kerana ia mengubah kawasan penempatan dan sumber makanan. / Because it changes settlement areas and food sources."
          },
          {
            type: "objective",
            question: "Nyatakan satu kesan pencairan ais terhadap alam sekitar. / State one effect of ice melting on the environment.",
            answer: "Pencairan ais meningkatkan paras laut dan mengubah garis pantai. / Melting ice raises sea levels and changes coastlines."
          }
        ]
      },
      {
        id: "2-6-kesan-perubahan-zaman-air-batu-di-asia-tenggara",
        name: "2.6 Kesan Perubahan Zaman Air Batu di Asia Tenggara",
        summary: "Topik ini menerangkan kesan perubahan zaman air batu terhadap Asia Tenggara, termasuk kawasan daratan yang terdedah dan perubahan ekosistem.",
        summary_en: "This topic explains the effects of Ice Age changes in Southeast Asia, including exposed land areas and ecosystem changes.",
        facts: [
          "Perubahan zaman air batu mempengaruhi Asia Tenggara melalui perubahan paras laut dan bentuk muka bumi.",
          "Kawasan daratan yang terdedah membolehkan pergerakan haiwan dan manusia ke kawasan yang berbeza.",
          "Ekosistem berubah apabila kawasan sejuk menggantikan kawasan tropika tertentu.",
          "Perubahan ini mempengaruhi taburan tumbuhan, haiwan, dan masyarakat awal.",
          "Kesan zaman air batu masih dapat dilihat dalam bentuk landskap dan taburan sumber."
        ],
        facts_en: [
          "Ice Age changes affected Southeast Asia through changes in sea level and landforms.",
          "Exposed land areas allowed animals and humans to move to different places.",
          "Ecosystems changed when cold regions replaced some tropical areas.",
          "These changes affected the distribution of plants, animals, and early communities.",
          "The effects of the Ice Age can still be seen in the landscape and distribution of resources."
        ],
        quiz: [
          {
            question: "Mengapakah Asia Tenggara terjejas oleh perubahan zaman air batu? / Why was Southeast Asia affected by changes during the Ice Age?",
            choices: [
              "Kerana perubahan paras laut dan bentuk muka bumi mempengaruhi kawasan ini. / Because changes in sea level and landforms affected the region.",
              "Kerana tiada haiwan hidup di kawasan ini. / Because no animals lived in the region.",
              "Kerana cuaca sentiasa panas. / Because the weather was always hot.",
              "Kerana laut menghilang sepenuhnya. / Because the sea disappeared completely."
            ],
            answer: "Kerana perubahan paras laut dan bentuk muka bumi mempengaruhi kawasan ini. / Because changes in sea level and landforms affected the region."
          },
          {
            question: "Apakah kesan perubahan zaman air batu terhadap ekosistem Asia Tenggara? / What effect did Ice Age changes have on Southeast Asian ecosystems?",
            choices: [
              "Ekosistem berubah dan taburan hidupan berubah. / Ecosystems changed and the distribution of life changed.",
              "Semua hutan musnah sepenuhnya. / All forests were completely destroyed.",
              "Tiada perubahan berlaku. / No change occurred.",
              "Semua laut menjadi beku. / All oceans became frozen."
            ],
            answer: "Ekosistem berubah dan taburan hidupan berubah. / Ecosystems changed and the distribution of life changed."
          },
          {
            type: "objective",
            question: "Nyatakan satu kesan perubahan zaman air batu terhadap Asia Tenggara. / State one effect of Ice Age changes on Southeast Asia.",
            answer: "Ia mengubah paras laut, landskap, dan taburan manusia serta hidupan. / It changed sea level, landscapes, and the distribution of humans and life."
          }
        ]
      }
    ]
  },
  {
    id: "bab3",
    name: "Bab 3: Zaman Prasejarah",
    topics: [
      {
        id: "3-1-maksud-zaman-prasejarah",
        name: "3.1 Maksud Zaman Prasejarah",
        summary: "Topik ini menerangkan maksud zaman prasejarah, pembahagian zaman batu dan zaman logam, serta perkembangan teknologi dan kehidupan manusia awal.",
        summary_en: "This topic explains the meaning of the prehistoric age, the division between the Stone Age and Metal Age, and the development of technology and early human life.",
        facts: [
          "Zaman prasejarah ialah zaman sebelum manusia mengenal tulisan.",
          "Zaman ini terbahagi kepada Zaman Batu dan Zaman Logam.",
          "Zaman Paleolitik menekankan teknologi batu ringkas dan kehidupan nomad.",
          "Zaman Mesolitik menonjolkan pemburuan binatang dan penangkapan ikan.",
          "Zaman Neolitik memperlihatkan petempatan menetap, pertanian, penternakan, dan tembikar.",
          "Zaman Logam melibatkan inovasi gangsa dan besi, pelayaran, dan perdagangan barter."
        ],
        facts_en: [
          "The prehistoric age is the period before humans knew writing.",
          "It is divided into the Stone Age and the Metal Age.",
          "The Palaeolithic Age emphasized simple stone technology and nomadic life.",
          "The Mesolithic Age highlighted animal hunting and fishing.",
          "The Neolithic Age saw settled settlements, farming, animal husbandry, and pottery.",
          "The Metal Age involved bronze and iron innovations, seafaring, and barter trade."
        ],
        quiz: [
          {
            question: "Apakah maksud zaman prasejarah? / What is the meaning of the prehistoric age?",
            choices: [
              "Zaman sebelum manusia mengenali tulisan. / The age before humans knew writing.",
              "Zaman selepas penciptaan roda. / The age after the invention of the wheel.",
              "Zaman manusia mula menggunakan besi. / The age when humans started using iron.",
              "Zaman manusia membina bandar besar. / The age when humans built large cities."
            ],
            answer: "Zaman sebelum manusia mengenali tulisan. / The age before humans knew writing."
          },
          {
            question: "Apakah urutan yang betul bagi perkembangan Zaman Batu? / What is the correct sequence of the Stone Age development?",
            choices: [
              "Mesolitik -> Paleolitik -> Neolitik / Mesolithic -> Palaeolithic -> Neolithic",
              "Neolitik -> Mesolitik -> Paleolitik / Neolithic -> Mesolithic -> Palaeolithic",
              "Paleolitik -> Mesolitik -> Neolitik / Palaeolithic -> Mesolithic -> Neolithic",
              "Paleolitik -> Neolitik -> Mesolitik / Palaeolithic -> Neolithic -> Mesolithic"
            ],
            answer: "Paleolitik -> Mesolitik -> Neolitik / Palaeolithic -> Mesolithic -> Neolithic"
          },
          {
            type: "objective",
            question: "Terangkan dua perbezaan utama antara Zaman Paleolitik dan Zaman Neolitik. / Explain two main differences between the Palaeolithic and Neolithic Ages.",
            answer: "Pada Zaman Paleolitik, manusia menggunakan peralatan batu kasar dan hidup secara nomad; pada Zaman Neolitik, mereka menggunakan alat batu yang lebih halus dan mula hidup menetap serta bercucuk tanam. / In the Palaeolithic Age, humans used rough stone tools and lived a nomadic life; in the Neolithic Age, they used finer tools and began living in settled communities and farming."
          }
        ]
      },
      {
        id: "3-2-lokasi-zaman-prasejarah-di-dunia-dan-asia-tenggara",
        name: "3.2 Lokasi Zaman Prasejarah di Dunia dan Asia Tenggara",
        summary: "Topik ini menerangkan lokasi tapak prasejarah di dunia dan Asia Tenggara, termasuk bukti penemuan artifak dan ekofak.",
        summary_en: "This topic explains the locations of prehistoric sites in the world and Southeast Asia, including evidence of artifacts and ecofacts.",
        facts: [
          "Tapak prasejarah dikesan melalui penemuan artifak dan ekofak di kawasan terbuka atau gua.",
          "Contoh tapak dunia termasuk Altamira, Chauvet Cave, Catal Huyuk, Stonehenge, Bhimbetka, Zhoukoudian, Shahr-i-Sokhta, dan Gobekli Tepe.",
          "Contoh tapak di Asia Tenggara termasuk Lenggong, Ban Chiang, Liang Bua Cave, Padah-lin Cave, Sa Hyun, dan Tabon Cave.",
          "Penemuan tapak prasejarah membantu ahli arkeologi memahami petempatan, penguburan, dan peralatan masyarakat awal.",
          "Tapak-tapak ini menjadi bukti penting tentang kehidupan manusia sebelum kemunculan tulisan."
        ],
        facts_en: [
          "Prehistoric sites are identified through artifacts and ecofacts found in open areas or caves.",
          "Examples of world sites include Altamira, Chauvet Cave, Catal Huyuk, Stonehenge, Bhimbetka, Zhoukoudian, Shahr-i-Sokhta, and Gobekli Tepe.",
          "Examples in Southeast Asia include Lenggong, Ban Chiang, Liang Bua Cave, Padah-lin Cave, Sa Hyun, and Tabon Cave.",
          "Discoveries of prehistoric sites help archaeologists understand settlements, burials, and the tools of early societies.",
          "These sites are important evidence of human life before the advent of writing."
        ],
        quiz: [
          {
            question: "Rangka manusia 'Peking Man' ditemui di tapak prasejarah manakah? / The human skeleton 'Peking Man' was discovered at which prehistoric site?",
            choices: [
              "Catal Huyuk, Turkey",
              "Zhoukoudian, China",
              "Bhimbetka, India",
              "Altamira, Spain"
            ],
            answer: "Zhoukoudian, China"
          },
          {
            question: "Gua Liang Bua di Flores, Indonesia terkenal dengan penemuan fosil apa? / Liang Bua Cave in Flores, Indonesia is famous for the discovery of which fossil?",
            choices: [
              "Perak Man",
              "Peking Man",
              "Flores Man (Homo Floresiensis)",
              "Java Man"
            ],
            answer: "Flores Man (Homo Floresiensis)"
          },
          {
            type: "objective",
            question: "Nyatakan fungsi penemuan tapak zaman prasejarah kepada ahli arkeologi. / State the function of discovering prehistoric sites to archaeologists.",
            answer: "Tapak prasejarah berfungsi sebagai bukti petempatan, kawasan perkuburan, kawasan perburuan, dan tempat pembuatan peralatan batu atau ritual masyarakat prasejarah. / Prehistoric sites serve as evidence of settlements, burial grounds, hunting areas, and manufacturing sites for stone tools or rituals of prehistoric societies."
          }
        ]
      },
      {
        id: "3-3-ciri-ciri-kehidupan-manusia-zaman-prasejarah",
        name: "3.3 Ciri-ciri Kehidupan Manusia Zaman Prasejarah",
        summary: "Topik ini menerangkan ciri kehidupan manusia prasejarah dari segi kediaman, ekonomi, kepercayaan, dan kesenian.",
        summary_en: "This topic explains the characteristics of prehistoric human life in terms of dwellings, economy, beliefs, and art.",
        facts: [
          "Kediaman manusia berubah daripada gua dan ranting kepada rumah tetap batu atau kayu.",
          "Ekonomi berubah daripada sara diri dan nomad kepada pertanian, penternakan, dan sistem barter.",
          "Kepercayaan berkembang daripada animisme kepada ritual, penyembahan alam, dan kepercayaan kepada kehidupan selepas mati.",
          "Seni pula berkembang daripada lukisan gua realistik kepada corak simbolik dan geometri pada tembikar serta gendang gangsa.",
          "Organisasi sosial mula menjadi lebih teratur dengan pembahagian peranan dan kelas."
        ],
        facts_en: [
          "Human dwellings changed from caves and branches to permanent stone or wooden houses.",
          "Economies shifted from subsistence and nomadic life to agriculture, animal husbandry, and barter systems.",
          "Beliefs evolved from animism to rituals, nature worship, and belief in life after death.",
          "Art evolved from realistic cave paintings to symbolic and geometric designs on pottery and bronze drums.",
          "Social organization became more structured with role and class divisions."
        ],
        quiz: [
          {
            question: "Apakah bentuk kepercayaan manusia Zaman Paleolitik? / What was the form of belief system of Palaeolithic humans?",
            choices: [
              "Menyembah berhala / Idolatry",
              "Animisme / Animism",
              "Monoteisme / Monotheism",
              "Keagamaan tersusun / Organized religion"
            ],
            answer: "Animisme / Animism"
          },
          {
            question: "Apakah keistimewaan seni pada Zaman Neolitik? / What was the artistic highlight during the Neolithic Age?",
            choices: [
              "Pola geometri pada tembikar / Geometric patterns on pottery",
              "Ukiran gangsa / Bronze carving",
              "Lukisan gua realisme / Realism cave painting",
              "Patung ukiran batu besar / Megalithic statue carvings"
            ],
            answer: "Pola geometri pada tembikar / Geometric patterns on pottery"
          },
          {
            type: "objective",
            question: "Mengapakah pembahagian kelas sosial mula wujud pada Zaman Neolitik? / Why did social class divisions begin during the Neolithic Age?",
            answer: "Kerana manusia mula hidup menetap dan membentuk sistem sosial yang lebih teratur. / Because humans began living in settled communities and forming a more organized social system."
          }
        ]
      },
      {
        id: "3-4-kesinambungan-sumbangan-zaman-prasejarah",
        name: "3.4 Kesinambungan Sumbangan Zaman Prasejarah",
        summary: "Topik ini menerangkan bagaimana aktiviti prasejarah diteruskan dan dipertingkat dalam masyarakat moden hari ini.",
        summary_en: "This topic explains how prehistoric activities continued and improved in modern society today.",
        facts: [
          "Aktiviti pertanian dan penternakan berkembang daripada sara diri kepada industri komersial besar-besaran.",
          "Aktiviti memburu binatang berubah daripada keperluan hidup kepada hobi berlesen.",
          "Peralatan dan tembikar berkembang daripada batu dan tulang kepada mesin moden dan industri penting.",
          "Amalan menghormati orang mati dan seni bina megalitik terus memberi inspirasi kepada masyarakat moden.",
          "Sumbangan prasejarah masih dapat dilihat dalam kehidupan seharian moden."
        ],
        facts_en: [
          "Agriculture and livestock activities evolved from subsistence to large-scale commercial industries.",
          "Animal hunting changed from a survival necessity to a licensed hobby.",
          "Tools and pottery evolved from stone and bone to modern machinery and important industries.",
          "Practices of honoring the dead and megalithic architecture continue to inspire modern societies.",
          "Prehistoric contributions are still visible in everyday modern life."
        ],
        quiz: [
          {
            question: "Bagaimanakah aktiviti memburu binatang dijalankan pada zaman moden kini? / How is animal hunting carried out in modern times today?",
            choices: [
              "Dijalankan untuk sara diri sahaja / Carried out solely for subsistence",
              "Dijalankan sebagai hobi dengan lesen berdaftar / Carried out as a hobby with a registered license",
              "Menggunakan perangkap batu kasar / Using rough stone traps",
              "Dilarang sepenuhnya di seluruh dunia / Strictly prohibited worldwide"
            ],
            answer: "Dijalankan sebagai hobi dengan lesen berdaftar / Carried out as a hobby with a registered license"
          },
          {
            question: "Apakah contoh industri tembikar warisan prasejarah yang terkenal di Kuala Kangsar, Perak? / What is a famous example of a prehistoric heritage pottery industry in Kuala Kangsar, Perak?",
            choices: [
              "Gendang Gangsa / Bronze Drum",
              "Tembikar Dinasti Ming / Ming Dynasty Pottery",
              "Labu Sayong / Labu Sayong",
              "Pasu Terracotta / Terracotta Vase"
            ],
            answer: "Labu Sayong / Labu Sayong"
          },
          {
            type: "objective",
            question: "Nyatakan dua contoh aktiviti zaman prasejarah yang masih diamalkan dalam masyarakat moden. / State two examples of prehistoric activities still practiced in modern society.",
            answer: "Aktiviti pertanian dan penternakan, serta pembuatan tembikar. / Agricultural and livestock activities, as well as pottery making."
          }
        ]
      },
      {
        id: "3-5-zaman-prasejarah-di-malaysia",
        name: "3.5 Zaman Prasejarah di Malaysia",
        summary: "Topik ini menerangkan perkembangan zaman prasejarah di Malaysia dari Paleolitik hingga Logam, beserta bukti arkeologi yang ditemui.",
        summary_en: "This topic explains the development of the prehistoric age in Malaysia from the Palaeolithic to the Metal Age, along with archaeological evidence found.",
        facts: [
          "Malaysia meliputi Zaman Paleolitik, Hoabinhian/Epi-Paleolitik, Neolitik, dan Logam.",
          "Bukti kewujudan prasejarah di Malaysia termasuk peralatan batu dan logam, tembikar, manik, lukisan gua, ukiran batu, dan budaya megalit.",
          "Contoh tapak penting termasuk Kota Tampan, Gua Niah, Tingkayu, Gua Cha, Jenderam Hilir, Gua Kecil, Lubang Angin, Lembah Bernam, dan Sungai Tembeling.",
          "Kaedah pengebumian prasejarah di Malaysia termasuk pengebumian memanjang, melentur, keranda kayu, tempayan, dan kubur kepingan batu.",
          "Penemuan di Malaysia menunjukkan masyarakat prasejarah sudah mempunyai kemampuan ekonomi, sosial, dan kepercayaan yang kompleks."
        ],
        facts_en: [
          "Malaysia covered the Palaeolithic, Hoabinhian/Epi-Palaeolithic, Neolithic, and Metal Ages.",
          "Evidence of prehistoric life in Malaysia includes stone and metal tools, pottery, beads, cave paintings, stone carvings, and megalithic culture.",
          "Important sites include Kota Tampan, Niah Cave, Tingkayu, Gua Cha, Jenderam Hilir, Gua Kecil, Lubang Angin, Bernam Valley, and Sungai Tembeling.",
          "Burial methods included extended burial, flexed burial, wooden coffins, jar burial, and stone-slab graves.",
          "Findings in Malaysia show prehistoric communities already had complex economic, social, and belief systems."
        ],
        quiz: [
          {
            question: "Rangka 'Perak Man' yang berusia 11,000 hingga 10,000 SM ditemui di kawasan mana? / The 'Perak Man' skeleton dating back 11,000 to 10,000 BC was found in which area?",
            choices: [
              "Gua Niah, Sarawak",
              "Lenggong, Perak",
              "Tingkayu, Sabah",
              "Jenderam Hilir, Selangor"
            ],
            answer: "Lenggong, Perak"
          },
          {
            question: "Apakah nama alat batu khas yang digunakan untuk menuai padi pada Zaman Neolitik di Pahang? / What is the special stone tool used for harvesting rice during the Neolithic Age in Pahang?",
            choices: [
              "Mikrolit / Microlith",
              "Pisau Tembeling / Tembeling Knife",
              "Kapak Bersoket / Socketed Axe",
              "Tulang Mawas / Ape Bone Tool"
            ],
            answer: "Pisau Tembeling / Tembeling Knife"
          },
          {
            type: "objective",
            question: "Berikan dua bukti arkeologi yang menunjukkan kewujudan zaman prasejarah di Malaysia. / Provide two archaeological evidences showing the existence of the prehistoric age in Malaysia.",
            answer: "Penemuan peralatan batu/logam seperti di Kota Tampan dan penemuan lukisan gua serta tembikar seperti di Gua Niah. / Discovery of stone/metal tools such as in Kota Tampan and discovery of cave paintings and pottery such as in Niah Cave."
          }
        ]
      }
    ]
  },
  {
    id: "bab4",
    name: "Bab 4: Mengenali Tamadun",
    topics: [
      {
        id: "4-1-maksud-tamadun",
        name: "4.1 Maksud Tamadun",
        summary: "Topik ini menerangkan maksud tamadun dari sudut bahasa Yunani, Arab, Inggeris, dan Melayu, serta hubungannya dengan kemajuan masyarakat.",
        summary_en: "This topic explains the meaning of civilisation from Greek, Arabic, English, and Malay perspectives, as well as its relationship to societal progress.",
        facts: [
          "Perkataan civitas dalam bahasa Yunani membawa maksud bandar atau kota.",
          "Dalam bahasa Inggeris, civilisation merujuk kepada peringkat perkembangan manusia dan organisasi yang dianggap maju.",
          "Dalam bahasa Arab, istilah seperti mudun, madain, madana, hadharah, dan hadari berkaitan dengan bandar, kekayaan, dan kehidupan yang tersusun.",
          "Dalam bahasa Melayu, tamadun sering dikaitkan dengan perkataan peradaban yang merujuk kepada kemajuan dalam kebendaan dan pemikiran.",
          "Tamadun melibatkan perkembangan budaya, sains, industri, ekonomi, dan sistem kerajaan."
        ],
        facts_en: [
          "The word civitas in Greek means town or city.",
          "In English, civilisation refers to the level of human and organizational development regarded as advanced.",
          "In Arabic, terms such as mudun, madain, madana, hadharah, and hadari are related to cities, wealth, and organized life.",
          "In Malay, civilisation is often associated with the word peradaban, meaning progress in material life and thought.",
          "Civilisation involves the development of culture, science, industry, economy, and government systems."
        ],
        quiz: [
          {
            question: "Perkataan 'Civitas' dalam bahasa Yunani membawa maksud... / The word 'Civitas' in Greek means...",
            choices: [
              "Bandar atau kota / Town or city",
              "Perkembangan rohani / Spiritual development",
              "Kepercayaan tempatan / Local belief",
              "Sistem pertanian / Agricultural system"
            ],
            answer: "Bandar atau kota / Town or city"
          },
          {
            question: "Istilah bahasa Arab yang merujuk kepada kawasan atau bandar yang digunakan untuk bertani ialah... / The Arabic term referring to a region or city used for farming is...",
            choices: [
              "Madana",
              "Mudun",
              "Hadharah",
              "Peradaban"
            ],
            answer: "Hadharah"
          },
          {
            type: "objective",
            question: "Nyatakan satu maksud tamadun dalam bahasa Melayu. / State one meaning of civilisation in Malay.",
            answer: "Dalam bahasa Melayu, tamadun dikaitkan dengan peradaban yang merujuk kepada kemajuan dalam kebendaan dan pemikiran. / In Malay, civilisation is associated with peradaban, meaning progress in material life and thought."
          }
        ]
      },
      {
        id: "4-2-konsep-tamadun-islam-dan-barat",
        name: "4.2 Konsep Tamadun (Islam & Barat)",
        summary: "Topik ini membandingkan konsep tamadun menurut pandangan Islam dan Barat, termasuk fokus pembangunan lahiriah dan rohaniah.",
        summary_en: "This topic compares the concept of civilisation according to Islamic and Western views, including focus on physical and spiritual development.",
        facts: [
          "Pandangan Islam membina tamadun atas asas Islam sebagai al-Din, iaitu cara hidup.",
          "Pandangan Islam menekankan keseimbangan perkembangan lahiriah dan rohaniah berdasarkan al-Quran dan Hadis.",
          "Ibn Khaldun memperkenalkan istilah umran dan hadharah dalam Muqaddimah.",
          "Hadharah merangkumi akidah, undang-undang, akhlak, falsafah, dan budaya, manakala madaniyyah merujuk kepada aspek kebendaan.",
          "Pandangan Barat lebih menekankan pembangunan lahiriah, kebendaan, sains, teknologi, ekonomi, dan pembandaran."
        ],
        facts_en: [
          "The Islamic view builds civilisation on the basis of Islam as al-Din, a way of life.",
          "The Islamic view emphasizes a balance between physical and spiritual development based on the Quran and Hadith.",
          "Ibn Khaldun introduced the terms umran and hadharah in Muqaddimah.",
          "Hadharah covers faith, law, morals, philosophy, and culture, while madaniyyah refers to material aspects.",
          "The Western view places more emphasis on physical and material development, science, technology, economics, and urbanization."
        ],
        persons: [
          {
            name: "Ibn Khaldun",
            role: "Sejarawan dan pemikir Islam",
            description: "Beliau memperkenalkan konsep umran dan hadharah serta menilai perkembangan masyarakat dan tamadun.",
            description_en: "He introduced the concepts of umran and hadharah and assessed the development of society and civilisation."
          },
          {
            name: "Arnold J. Toynbee",
            role: "Sejarawan Barat",
            description: "Beliau mendefinisikan tamadun sebagai sistem yang memperkasakan politik, ekonomi, sosial, dan seni.",
            description_en: "He defined civilisation as a system that strengthens politics, economy, society, and the arts."
          }
        ],
        quiz: [
          {
            question: "Apakah asas utama konsep tamadun menurut pandangan Islam? / What is the main foundation of the concept of civilisation in the Islamic view?",
            choices: [
              "Islam sebagai al-Din / Islam as al-Din",
              "Pembangunan fizikal semata-mata / Physical development only",
              "Pencapaian sains dan teknologi / Scientific and technological achievement",
              "Sistem perdagangan bebas / Free trade system"
            ],
            answer: "Islam sebagai al-Din / Islam as al-Din"
          },
          {
            question: "Tokoh sejarawan Barat yang mendefinisikan tamadun sebagai sistem yang memperkasakan politik, ekonomi, sosial, dan seni ialah... / The Western historian who defined civilisation as a system empowering politics, economy, society, and arts is...",
            choices: [
              "E.H. Carr",
              "Arnold J. Toynbee",
              "Herodotus",
              "Gordon Childe"
            ],
            answer: "Arnold J. Toynbee"
          },
          {
            type: "objective",
            question: "Nyatakan satu perbezaan utama antara pandangan Islam dan pandangan Barat. / State one main difference between Islamic and Western views.",
            answer: "Pandangan Islam menekankan keseimbangan lahiriah dan rohaniah, manakala pandangan Barat lebih menekankan pembangunan lahiriah dan kebendaan. / The Islamic view emphasizes balance between physical and spiritual development, while the Western view emphasizes physical and material development."
          }
        ]
      },
      {
        id: "4-3-ciri-ciri-tamadun-awal-dunia",
        name: "4.3 Ciri-ciri Tamadun Awal Dunia",
        summary: "Topik ini menerangkan ciri-ciri tamadun awal dunia seperti pertanian, perdagangan, sistem pemerintahan, pembentukan bandar, pengkhususan pekerjaan, teknologi, organisasi sosial, agama, tulisan, dan kesenian.",
        summary_en: "This topic explains the characteristics of early world civilisations such as agriculture, trade, government systems, urban formation, job specialization, technology, social organisation, religion, writing, and art.",
        facts: [
          "Pertanian dan perdagangan menjadi asas perkembangan tamadun awal.",
          "Sistem pemerintahan berkembang daripada pendeta kepada raja dan undang-undang.",
          "Kampung berkembang menjadi bandar yang tersusun dengan kubu dan kuil.",
          "Pekerjaan menjadi lebih khusus seperti pemungut cukai, askar, jurutera, petani, dan tukang.",
          "Teknologi seperti monumen, metalurgi, roda, dan bajak memajukan tamadun awal.",
          "Organisasi sosial menjadi lebih hierarki dengan golongan pemerintah, tukang, petani, dan hamba.",
          "Agama dan kepercayaan memainkan peranan penting dalam kehidupan masyarakat.",
          "Tulisan seperti piktograf dan kuneiform membantu menyimpan rekod.",
          "Kesenian dan kesusasteraan memperkukuh identiti dan budaya masyarakat."
        ],
        facts_en: [
          "Agriculture and trade became the foundation of early civilisations.",
          "Government systems evolved from priests to kings and laws.",
          "Villages developed into organized cities with forts and temples.",
          "Jobs became more specialized such as tax collectors, soldiers, engineers, farmers, and artisans.",
          "Technologies such as monuments, metallurgy, wheels, and plows advanced early civilisations.",
          "Social organization became more hierarchical with rulers, artisans, farmers, and slaves.",
          "Religion and belief played an important role in people's lives.",
          "Writing systems such as pictographs and cuneiform helped preserve records.",
          "Art and literature strengthened identity and culture."
        ],
        quiz: [
          {
            question: "Dalam organisasi sosial tamadun awal, golongan manakah berada di lapisan paling bawah? / In the social organization of early civilisations, which group was at the lowest tier?",
            choices: [
              "Petani / Farmers",
              "Artisans / Artisans",
              "Hamba / Slaves",
              "Pedagang / Merchants"
            ],
            answer: "Hamba / Slaves"
          },
          {
            question: "Apakah contoh sistem tulisan awal yang menggunakan piktograf dalam Tamadun Mesopotamia? / What is an example of an early writing system using pictographs in Mesopotamian civilisation?",
            choices: [
              "Hieroglif / Hieroglyphs",
              "Kuneiform / Cuneiform",
              "Abjad / Alphabet",
              "Sanskrit / Sanskrit"
            ],
            answer: "Kuneiform / Cuneiform"
          },
          {
            type: "objective",
            question: "Senaraikan dua ciri utama perkembangan tamadun awal dunia. / List two main characteristics of the development of early world civilisations.",
            answer: "Pertanian dan perdagangan, serta pembentukan bandar dan sistem pemerintahan. / Agriculture and trade, as well as city formation and government systems."
          }
        ]
      }
    ]
  },
  {
    id: "bab5",
    name: "Bab 5: Tamadun Awal Dunia",
    topics: [
      {
        id: "5-1-empat-lokasi-tamadun-awal-dunia",
        name: "5.1 Empat Lokasi Tamadun Awal Dunia",
        summary: "Topik ini menerangkan empat tamadun awal dunia yang berkembang di lembah sungai serta kepentingan sungai kepada masyarakatnya.",
        summary_en: "This topic explains four early world civilisations that developed in river valleys and the importance of rivers to their communities.",
        facts: [
          "Tamadun Mesopotamia berkembang di antara Sungai Tigris dan Sungai Euphrates.",
          "Tamadun Mesir Purba berkembang di Lembah Sungai Nil.",
          "Tamadun Indus berkembang di Lembah Sungai Indus.",
          "Tamadun Huang He berkembang di Lembah Sungai Huang He atau Sungai Kuning.",
          "Sungai membekalkan air untuk pertanian dan kegunaan harian, di samping menjadi laluan perhubungan dan pengangkutan."
        ],
        facts_en: [
          "Mesopotamian Civilisation developed between the Tigris and Euphrates Rivers.",
          "Ancient Egyptian Civilisation developed in the Nile River Valley.",
          "Indus Civilisation developed in the Indus River Valley.",
          "Huang He Civilisation developed in the Huang He, or Yellow River, Valley.",
          "Rivers supplied water for agriculture and daily use, as well as routes for communication and transportation."
        ],
        quiz: [
          {
            question: "Antara yang berikut, sungai manakah yang berkaitan dengan Tamadun Mesopotamia? / Which of the following rivers is associated with the Mesopotamian Civilisation?",
            choices: [
              "Sungai Nil / Nile River",
              "Sungai Indus / Indus River",
              "Sungai Tigris / Tigris River",
              "Sungai Huang He / Huang He River"
            ],
            answer: "Sungai Tigris / Tigris River"
          },
          {
            question: "Apakah fungsi utama sungai kepada masyarakat tamadun awal? / What was the main function of rivers to early civilisations?",
            choices: [
              "Pembinaan kubu tentera / Building military forts",
              "Sumber air dan pengangkutan / Water source and transportation",
              "Pusat perlombongan emas / Gold mining centres",
              "Tempat rekreasi / Recreation spots"
            ],
            answer: "Sumber air dan pengangkutan / Water source and transportation"
          },
          {
            question: "Tamadun Mesir Purba terletak di kawasan lembah sungai yang dikenali sebagai: / Ancient Egyptian Civilisation was located in which river valley?",
            choices: [
              "Lembah Sungai Indus / Indus River Valley",
              "Lembah Sungai Nil / Nile River Valley",
              "Lembah Sungai Yangtze / Yangtze River Valley",
              "Lembah Bulan Sabit / Crescent Valley"
            ],
            answer: "Lembah Sungai Nil / Nile River Valley"
          },
          {
            type: "objective",
            question: "Nyatakan dua kepentingan sungai kepada pembentukan tamadun awal dunia. / State two importances of rivers in the formation of early world civilisations.",
            answer: "Sungai membekalkan air untuk aktiviti pertanian dan kegunaan harian, serta menjadi laluan perhubungan dan pengangkutan. / Rivers provide water for agricultural activities and daily use, and serve as communication and transportation routes."
          }
        ]
      },
      {
        id: "5-2-perkembangan-empat-tamadun-awal-dunia",
        name: "5.2 Perkembangan Empat Tamadun Awal Dunia",
        summary: "Topik ini menerangkan perkembangan Tamadun Mesopotamia, Mesir Purba, Indus dan Huang He.",
        summary_en: "This topic explains the development of the Mesopotamian, Ancient Egyptian, Indus, and Huang He Civilisations.",
        facts: [
          "Tamadun Mesopotamia bermula di Sumeria, kawasan Bulan Sabit Subur, dan terkenal dengan negara-kota seperti Ur serta zigurat.",
          "Tamadun Mesir Purba dikenali sebagai Hadiah Sungai Nil dan melalui zaman Kerajaan Purba, Pertengahan, dan Baru.",
          "Tamadun Indus mempunyai bandar terancang Mohenjo-Daro dan Harappa dengan sistem perpaipan dan pembetungan yang canggih.",
          "Tamadun Huang He berkembang di utara China melalui kerajaan Xia, Shang, dan Zhou.",
          "Anyang menjadi salah satu pusat penting dalam perkembangan Tamadun Huang He."
        ],
        facts_en: [
          "Mesopotamian Civilisation began in Sumer in the Fertile Crescent and was known for city-states such as Ur and ziggurats.",
          "Ancient Egyptian Civilisation was known as the Gift of the Nile and passed through the Old, Middle, and New Kingdom periods.",
          "Indus Civilisation had the planned cities of Mohenjo-Daro and Harappa, with sophisticated plumbing and sewerage systems.",
          "Huang He Civilisation developed in northern China through the Xia, Shang, and Zhou dynasties.",
          "Anyang was one important centre in the development of Huang He Civilisation."
        ],
        quiz: [
          {
            question: "Mengapakah Mesir Purba digelar 'Hadiah Sungai Nil' oleh Herodotus? / Why was Ancient Egypt called 'The Gift of the Nile' by Herodotus?",
            choices: [
              "Membekalkan batu liat untuk bangunan / Supplied clay bricks for buildings",
              "Banjir tahunan membawa lumpur hitam yang subur / Annual flooding brought fertile black silt",
              "Menjadi kawasan pelancongan utama / Became a primary tourism hub",
              "Membekalkan hasil laut utama dunia / Provided the world's main seafood supply"
            ],
            answer: "Banjir tahunan membawa lumpur hitam yang subur / Annual flooding brought fertile black silt"
          },
          {
            question: "Bandar terancang Mohenjo-Daro dan Harappa dibina dalam tamadun manakah? / The planned cities of Mohenjo-Daro and Harappa were built in which civilisation?",
            choices: [
              "Tamadun Mesopotamia / Mesopotamian Civilisation",
              "Tamadun Mesir Purba / Ancient Egyptian Civilisation",
              "Tamadun Indus / Indus Civilisation",
              "Tamadun Huang He / Huang He Civilisation"
            ],
            answer: "Tamadun Indus / Indus Civilisation"
          },
          {
            question: "Apakah tempat ibadat berbentuk piramid yang dibina di pusat bandar Tamadun Mesopotamia? / What pyramid-shaped place of worship was built in the city center of the Mesopotamian Civilisation?",
            choices: [
              "Sfinks / Sphinx",
              "Piramid / Pyramid",
              "Zigurat / Ziggurat",
              "Candi / Temple"
            ],
            answer: "Zigurat / Ziggurat"
          },
          {
            type: "objective",
            question: "Jelaskan keistimewaan perancangan bandar dalam Tamadun Indus. / Explain the special features of city planning in the Indus Civilisation.",
            answer: "Kota dibina mengikut grid yang tepat, mempunyai jalan raya yang lebar, dinding bata tebal untuk mengelakkan banjir, serta sistem perpaipan dan pembetungan yang canggih. / Cities were built on a precise grid pattern, with wide roads, thick brick walls to prevent flooding, and sophisticated piping and sewerage systems."
          }
        ]
      },
      {
        id: "5-3-perbandingan-sumbangan-tamadun-awal",
        name: "5.3 Perbandingan Sumbangan Tamadun Awal",
        summary: "Topik ini membandingkan sumbangan tamadun awal dalam pemerintahan, ekonomi, teknologi, kesenian dan binaan.",
        summary_en: "This topic compares contributions of early civilisations in government, economy, technology, arts, and architecture.",
        facts: [
          "Tamadun Mesopotamia menyumbang Kod Hammurabi, tulisan kuneiform, roda, bajak, sauh, dan sistem nombor berasaskan 60.",
          "Tamadun Mesir Purba diperintah oleh Firaun dan menghasilkan papirus, kalendar 365 hari, perubatan, piramid, serta Sfinks.",
          "Tamadun Indus mempunyai pemerintahan oleh golongan pendeta, perkembangan pertanian dan perdagangan, serta tembikar dan ukiran batu.",
          "Tamadun Huang He memperkenalkan konsep Mandat dari Syurga, kompas magnetik, benang sutera, dan puisi.",
          "Sumbangan tamadun awal menjadi asas perkembangan pentadbiran, ekonomi, teknologi, dan kebudayaan dunia."
        ],
        facts_en: [
          "Mesopotamian Civilisation contributed the Code of Hammurabi, cuneiform writing, the wheel, plough, anchor, and a base-60 number system.",
          "Ancient Egypt was ruled by Pharaohs and produced papyrus, a 365-day calendar, medicine, pyramids, and the Sphinx.",
          "Indus Civilisation was governed by priests and developed agriculture, trade, pottery, and stone carvings.",
          "Huang He Civilisation introduced the Mandate of Heaven, magnetic compass, silk thread, and poetry.",
          "Early civilisations' contributions formed foundations for world administration, economy, technology, and culture."
        ],
        quiz: [
          {
            question: "Apakah sumbangan penting Raja Hammurabi dari Tamadun Mesopotamia? / What was the major contribution of King Hammurabi of the Mesopotamian Civilisation?",
            choices: [
              "Pembinaan Piramid / Construction of Pyramids",
              "Kod Undang-undang Hammurabi / Code of Hammurabi",
              "Penciptaan Kompas Magnetik / Invention of the magnetic compass",
              "Penemuan kertas papirus / Invention of papyrus paper"
            ],
            answer: "Kod Undang-undang Hammurabi / Code of Hammurabi"
          },
          {
            question: "Sistem tulisan terawal yang dicipta oleh masyarakat Mesir Purba dikenali sebagai: / The earliest writing system created by the Ancient Egyptians is known as:",
            choices: [
              "Kuneiform / Cuneiform",
              "Piktograf / Pictograph",
              "Hieroglif / Hieroglyphs",
              "Ideogram / Ideogram"
            ],
            answer: "Hieroglif / Hieroglyphs"
          },
          {
            question: "Apakah inovasi teknologi yang dihasilkan oleh masyarakat Tamadun Huang He? / Which technological innovation was produced by the Huang He Civilisation?",
            choices: [
              "Roda dan sauh / Wheel and anchor",
              "Kompas magnetik dan benang sutera / Magnetic compass and silk thread",
              "Terusan air dan zigurat / Water canals and ziggurats",
              "Ubat mumi dan papirus / Mummification medicine and papyrus"
            ],
            answer: "Kompas magnetik dan benang sutera / Magnetic compass and silk thread"
          },
          {
            type: "objective",
            question: "Terangkan dua sumbangan Tamadun Mesopotamia dalam bidang teknologi dan matematik. / Explain two contributions of the Mesopotamian Civilisation in technology and mathematics.",
            answer: "Tamadun Mesopotamia mencipta roda, bajak, dan sauh untuk pengangkutan serta pertanian, dan memperkenalkan sistem nombor berasaskan 60 yang membahagikan masa kepada 60 minit dan bulatan kepada 360 darjah. / Mesopotamian Civilisation invented the wheel, plough, and anchor for transport and agriculture, and introduced a base-60 number system that divides time into 60 minutes and circles into 360 degrees."
          }
        ]
      }
    ]
  },
  {
    id: "bab6",
    name: "Bab 6: Peningkatan Tamadun Yunani dan Rom",
    topics: [
      {
        id: "6-1-tamadun-yunani-lokasi-dan-perkembangannya",
        name: "6.1 Tamadun Yunani: Lokasi dan Perkembangannya",
        summary: "Topik ini menerangkan lokasi, polis dan ciri utama Tamadun Yunani.",
        summary_en: "This topic explains the location, polis, and main features of Greek Civilisation.",
        facts: [
          "Tamadun Yunani berkembang di Semenanjung Greece dan pulau-pulau di Laut Aegean serta Laut Mediterranean antara 1000 SM hingga 800 SM.",
          "Negara-kota Yunani dikenali sebagai polis dan terdiri daripada bandar utama, bandar kecil, serta kawasan kampung.",
          "Acropolis ialah pusat komuniti berkubu di lokasi strategik, manakala Agora ialah kawasan lapang untuk pertemuan dan pasar awam.",
          "Athens mempunyai penduduk paling ramai, Sparta paling luas, dan Corinth juga merupakan polis terkenal."
        ],
        facts_en: [
          "Greek Civilisation developed on the Greek Peninsula and islands in the Aegean and Mediterranean Seas between 1000 BC and 800 BC.",
          "Greek city-states were known as polis and consisted of a main town, small towns, and countryside villages.",
          "The Acropolis was a fortified community centre in a strategic location, while the Agora was an open meeting and marketplace area.",
          "Athens had the largest population, Sparta was the largest in area, and Corinth was also a famous polis."
        ],
        quiz: [
          { question: "Apakah kawasan lapang di dalam polis yang berfungsi sebagai tempat pertemuan dan pasar awam? / What is the open area in a polis that functioned as a meeting place and public market?", choices: ["Acropolis", "Agora", "Colosseum", "Parthenon"], answer: "Agora" },
          { question: "Antara polis berikut, yang manakah mempunyai bilangan penduduk yang paling ramai dalam Tamadun Yunani? / Among the following polis, which had the largest population in Greek Civilisation?", choices: ["Sparta", "Corinth", "Athens", "Olympia"], answer: "Athens" },
          { question: "Mengapakah Acropolis dianggap sebagai lokasi yang paling strategik di dalam sesebuah polis? / Why was the Acropolis considered the most strategic location in a polis?", choices: ["Ia merupakan pusat utama aktiviti pertanian / It was the main center for agricultural activities", "Ia dilengkapi kemudahan pengangkutan moden / It was equipped with modern transportation facilities", "Ia menyediakan perlindungan, pusat pentadbiran, dan tempat ibadat / It provided protection, administration centers, and places of worship", "Ia merupakan tempat tinggal utama bagi golongan hamba / It was the main residence for slaves"], answer: "Ia menyediakan perlindungan, pusat pentadbiran, dan tempat ibadat / It provided protection, administration centers, and places of worship" },
          { type: "objective", question: "Jelaskan tiga komponen utama yang membentuk sesebuah polis dalam Tamadun Yunani. / Explain the three main components that formed a polis in Greek Civilisation.", answer: "Polis terdiri daripada bandar utama, bandar kecil, dan kawasan kampung. Acropolis menjadi pusat pentadbiran dan kubu pertahanan, manakala Agora berfungsi sebagai pasar dan tempat perjumpaan awam. / A polis consisted of a main town, small towns, and countryside villages. The Acropolis was an administrative centre and defensive fortress, while the Agora served as a marketplace and public gathering space." }
        ]
      },
      {
        id: "6-2-peningkatan-pemerintahan-dan-pentadbiran-yunani",
        name: "6.2 Peningkatan Pemerintahan dan Pentadbiran Tamadun Yunani",
        summary: "Topik ini menerangkan perkembangan sistem pemerintahan Athens dan Sparta.",
        summary_en: "This topic explains the development of government systems in Athens and Sparta.",
        facts: [
          "Athens melalui sistem Monarki, Oligarki, Aristokrasi, Tirani, dan Demokrasi.",
          "Demokrasi Athens melibatkan Dewan Perhimpunan, Majlis 500, Majistret, dan Juri.",
          "Pericles memantapkan demokrasi dengan menekankan kuasa rakyat.",
          "Sparta mengamalkan monarki terhad yang dipimpin dua raja serta menekankan disiplin ketenteraan dan latihan fizikal."
        ],
        facts_en: [
          "Athens experienced Monarchy, Oligarchy, Aristocracy, Tyranny, and Democracy.",
          "Athenian democracy involved the Assembly, Council of 500, Magistrates, and Juries.",
          "Pericles strengthened democracy by emphasizing the power of citizens.",
          "Sparta practised a limited monarchy led by two kings and emphasized military discipline and physical training."
        ],
        quiz: [
          { question: "Apakah urutan perkembangan sistem pemerintahan di Athens sebelum mencapai sistem demokrasi? / What was the sequence of governance system changes in Athens before reaching democracy?", choices: ["Monarki → Oligarki → Aristokrasi → Tirani → Demokrasi / Monarchy → Oligarchy → Aristocracy → Tyranny → Democracy", "Monarki → Aristokrasi → Oligarki → Tirani → Demokrasi / Monarchy → Aristocracy → Oligarchy → Tyranny → Democracy", "Oligarki → Monarki → Tirani → Aristokrasi → Demokrasi / Oligarchy → Monarchy → Tyranny → Aristocracy → Democracy", "Tirani → Oligarki → Aristokrasi → Monarki → Demokrasi / Tyranny → Oligarchy → Aristocracy → Monarchy → Democracy"], answer: "Monarki → Oligarki → Aristokrasi → Tirani → Demokrasi / Monarchy → Oligarchy → Aristocracy → Tyranny → Democracy" },
          { question: "Apakah fungsi utama Majlis (Majlis 500) dalam sistem pentadbiran Athens? / What was the main function of the Council (Council of 500) in the Athenian administrative system?", choices: ["Memutuskan hukuman bagi kes mahkamah / Deciding verdicts in court cases", "Mengendalikan urusan dan melaksanakan keputusan Dewan Perhimpunan / Managing affairs and implementing decisions of the Assembly", "Memimpin pasukan tentera dalam peperangan / Leading military forces in war", "Melantik raja untuk mengetuai pentadbiran / Appointing kings to lead the administration"], answer: "Mengendalikan urusan dan melaksanakan keputusan Dewan Perhimpunan / Managing affairs and implementing decisions of the Assembly" },
          { question: "Mengapakah Sparta mengamalkan sistem pemerintahan yang dianggotai oleh dua orang raja? / Why did Sparta practice a system of governance led by two kings?", choices: ["Mengelakkan salah seorang raja bertindak kejam / To prevent one king from acting tyrannically or cruelly", "Memastikan latihan ketenteraan berjalan pantas / To ensure military training proceeded quickly", "Mengasingkan urusan agama dan pentadbiran / To separate religious and administrative affairs", "Membolehkan kaum wanita menjadi raja / To allow women to become rulers"], answer: "Mengelakkan salah seorang raja bertindak kejam / To prevent one king from acting tyrannically or cruelly" },
          { type: "objective", question: "Nyatakan perbezaan utama antara penekanan masyarakat di Athens dan Sparta. / State the main difference between the focus of society in Athens and Sparta.", answer: "Athens menekankan kebebasan, hak warganegara, pemikiran terbuka, dan kebudayaan melalui demokrasi. Sparta pula menekankan disiplin ketenteraan, latihan fizikal, dan kesetiaan kepada negara-kota. / Athens emphasized freedom, citizens' rights, open-minded thinking, and culture through democracy. Sparta emphasized military discipline, physical training, and loyalty to the city-state." }
        ]
      },
      {
        id: "6-3-tamadun-rom-lokasi-dan-perkembangannya",
        name: "6.3 Tamadun Rom: Lokasi dan Perkembangannya",
        summary: "Topik ini menerangkan lokasi, zaman perkembangan, Pax Romana dan struktur masyarakat Tamadun Rom.",
        summary_en: "This topic explains the location, historical eras, Pax Romana, and social structure of Roman Civilisation.",
        facts: [
          "Tamadun Rom terletak di Lembah Latium berhampiran Sungai Tiber.",
          "Tiga zaman utama Rom ialah Zaman Beraja, Zaman Republik, dan Zaman Empayar.",
          "Pax Romana berlangsung dari 27 SM hingga 180 M dan membawa keamanan selama 200 tahun di Asia, Afrika, dan Eropah.",
          "Masyarakat Rom terdiri daripada Patrician, Plebian seperti petani, artisan dan peniaga, serta hamba."
        ],
        facts_en: [
          "Roman Civilisation was located in the Latium Valley near the Tiber River.",
          "The three main Roman eras were the Monarchy, Republic, and Empire eras.",
          "Pax Romana lasted from 27 BC to AD 180 and brought 200 years of peace across Asia, Africa, and Europe.",
          "Roman society consisted of Patricians, Plebeians such as farmers, artisans, and traders, and slaves."
        ],
        quiz: [
          { question: "Apakah faktor geografi yang menyumbang kepada perkembangan awal Tamadun Rom di Lembah Latium? / What geographical factor contributed to the early development of Roman Civilisation in the Latium Valley?", choices: ["Kawasan tanah tinggi yang sejuk / Cold highland areas", "Tanahnya subur dan berhampiran Sungai Tiber / Fertile land near the Tiber River", "Terpencil daripada laluan perdagangan / Isolated from trade routes", "Dikelilingi padang pasir yang luas / Surrounded by vast deserts"], answer: "Tanahnya subur dan berhampiran Sungai Tiber / Fertile land near the Tiber River" },
          { question: "Apakah yang dimaksudkan dengan istilah Pax Romana? / What is meant by the term Pax Romana?", choices: ["Sistem undang-undang bertulis Rom / Written Roman legal system", "Era peperangan besar-besaran empayar Rom / Era of major Roman imperial wars", "Keamanan Rom selama 200 tahun dalam empayar / 200 years of Roman peace within the empire", "Perjanjian perdagangan antara Rom dan Yunani / Trade agreement between Rome and Greece"], answer: "Keamanan Rom selama 200 tahun dalam empayar / 200 years of Roman peace within the empire" },
          { question: "Golongan Plebian dalam masyarakat Rom terdiri daripada... / The Plebeians in Roman society consisted of...", choices: ["Raja dan kerabat diraja / Kings and royal family members", "Golongan atasan dan bangsawan / Upper class and nobles", "Petani, artisan, dan peniaga / Farmers, artisans, and traders", "Jeneral tentera sahaja / Military generals only"], answer: "Petani, artisan, dan peniaga / Farmers, artisans, and traders" },
          { type: "objective", question: "Nyatakan tiga zaman utama dalam lipatan sejarah perkembangan Tamadun Rom. / State the three main eras in the historical development of Roman Civilisation.", answer: "Zaman Beraja (753–509 SM), Zaman Republik (509–27 SM), dan Zaman Empayar (27 SM–476 M). / The Monarchy Era (753–509 BC), Republic Era (509–27 BC), and Empire Era (27 BC–AD 476)." }
        ]
      },
      {
        id: "6-4-peningkatan-seni-bina-rom",
        name: "6.4 Peningkatan Seni Bina dalam Tamadun Rom",
        summary: "Topik ini menerangkan ciri dan kegunaan binaan utama Tamadun Rom.",
        summary_en: "This topic explains the features and uses of major Roman architectural works.",
        facts: [
          "Seni bina Rom terkenal dengan ketahanan, saiz besar, nilai estetika, kubah, arca, dan penggunaan simen pozzolana.",
          "Marco Vitruvius ialah arkitek Rom terkenal yang mengarang buku On Architecture.",
          "Colosseum digunakan untuk pertandingan gladiator dan boleh memuatkan kira-kira 50,000 orang, manakala Pantheon ialah tempat penyembahan dewa-dewi.",
          "Akueduk membekalkan air ke bandar dan tempat mandi, jalan raya berlapis digunakan untuk tentera dan pengangkutan, manakala tembok mempertahankan empayar."
        ],
        facts_en: [
          "Roman architecture was known for durability, large scale, aesthetic value, domes, arches, and the use of pozzolana concrete.",
          "Marco Vitruvius was a famous Roman architect who wrote On Architecture.",
          "The Colosseum hosted gladiator contests and seated about 50,000 people, while the Pantheon was a temple for worshipping gods.",
          "Aqueducts supplied water to cities and baths, layered roads supported military movement and transport, and walls defended the empire."
        ],
        quiz: [
          { question: "Apakah bahan campuran pozzolana yang digunakan oleh orang Rom untuk membina bangunan yang kukuh? / What is the pozzolana mixture used by Romans to build strong structures?", choices: ["Pasir, lumpur, dan jerami / Sand, mud, and straw", "Kapur, air, dan abu gunung berapi / Lime, water, and volcanic ash", "Tanah liat, minyak, dan batu kapur / Clay, oil, and limestone", "Simen, kayu, dan besi / Cement, wood, and iron"], answer: "Kapur, air, dan abu gunung berapi / Lime, water, and volcanic ash" },
          { question: "Binaan Akueduk dalam Tamadun Rom dibina khas untuk tujuan apa? / What specific purpose was the Aqueduct built for in Roman Civilisation?", choices: ["Tempat perlawanan pahlawan gladiator / Venue for gladiator combat games", "Tembok sempadan pertahanan tentera / Military border defense wall", "Membekalkan air bersih secara sistematik / Systematically supplying clean water", "Laluan kereta kuda antarabangsa / International chariot route"], answer: "Membekalkan air bersih secara sistematik / Systematically supplying clean water" },
          { question: "Mengapakah Jalan Raya Rom dibina secara berlapis-lapis menggunakan batu besar, kelikir, dan konkrit? / Why were Roman roads constructed in layers using large stones, gravel, and concrete?", choices: ["Sebagai hiasan keindahan bandar / As decorations for city aesthetics", "Supaya kuat dan tahan menahan beban pasukan tentera / To make them strong and durable for military loads", "Menghalang pertumbuhan pokok di sekelilingnya / To prevent tree growth around them", "Memudahkan aktiviti pertanian dijalankan / To facilitate agricultural activities"], answer: "Supaya kuat dan tahan menahan beban pasukan tentera / To make them strong and durable for military loads" },
          { type: "objective", question: "Jelaskan kegunaan Colosseum dan Pantheon dalam Tamadun Rom. / Explain the uses of the Colosseum and Pantheon in Roman Civilisation.", answer: "Colosseum digunakan untuk pertandingan gladiator dan persembahan bersaiz besar, manakala Pantheon ialah tempat penyembahan dewa-dewi Rom. / The Colosseum was used for gladiatorial contests and large public spectacles, while the Pantheon was a place for worshipping Roman gods and goddesses." }
        ]
      }
    ]
  },
  {
    id: "bab7",
    name: "Bab 7: Peningkatan Tamadun India dan China",
    topics: [
      {
        id: "7-1-tamadun-india",
        name: "7.1 Tamadun India",
        summary: "Topik ini menerangkan perluasan kuasa secara fizikal dan keagamaan dalam Tamadun India.",
        summary_en: "This topic explains physical and religious expansion of power in Indian Civilisation.",
        facts: [
          "Perluasan kuasa ialah usaha kerajaan atau raja untuk menguasai dan memperluas pengaruh di sesebuah kawasan.",
          "Faktor perluasan kuasa termasuk kekuatan ketenteraan, dasar pemerintahan, sumber manusia, diplomasi keagamaan, dan kewangan.",
          "Dinasti Nanda, Maurya dan Gupta memperluas kuasa secara fizikal; Pataliputra menjadi pusat pemerintahan utama.",
          "Selepas Perang Kalinga, Maharaja Asoka menyebarkan agama Buddha melalui Tiang Asoka dan misi ke beberapa wilayah.",
          "Zaman Gupta dikenali sebagai zaman keemasan agama Hindu, dan Raja Samudragupta digelar Kaviraja."
        ],
        facts_en: [
          "Expansion of power is the effort of a kingdom or ruler to control and expand influence in a region.",
          "Factors of expansion include military strength, government policy, human resources, religious diplomacy, and finance.",
          "The Nanda, Maurya, and Gupta Dynasties expanded physically; Pataliputra was a main administrative centre.",
          "After the Kalinga War, Emperor Asoka spread Buddhism through the Pillars of Asoka and missions to several regions.",
          "The Gupta Period was known as the golden age of Hinduism, and King Samudragupta was called Kaviraja."
        ],
        quiz: [
          { question: "Apakah faktor yang membolehkan Dinasti Nanda, Maurya, dan Gupta membentuk empayar yang luas di India? / What factor enabled the Nanda, Maurya, and Gupta dynasties to form vast empires in India?", choices: ["Perdagangan maritim / Maritime trade", "Kekuatan ketenteraan dan dasar pemerintah / Military strength and ruler's policy", "Pembinaan Tembok Besar / Construction of the Great Wall", "Pengenalan sistem peperiksaan / Introduction of the examination system"], answer: "Kekuatan ketenteraan dan dasar pemerintah / Military strength and ruler's policy" },
          { question: "Mengapakah Maharaja Asoka menghentikan perluasan kuasa secara fizikal selepas Perang Kalinga? / Why did Emperor Asoka stop physical expansion after the Kalinga War?", choices: ["Kehabisan kewangan dalam perbendaharaan / Depletion of treasury funds", "Kesedaran akibat kehilangan nyawa dan kemusnahan yang besar / Awareness due to massive loss of lives and destruction", "Kehilangan sokongan daripada tentera kavalri / Loss of support from the cavalry army", "Serangan daripada empayar asing / Attacks from foreign empires"], answer: "Kesedaran akibat kehilangan nyawa dan kemusnahan yang besar / Awareness due to massive loss of lives and destruction" },
          { question: "Tokoh manakah dalam Dinasti Gupta yang meminati puisi keagamaan sehingga digelar Kaviraja? / Which figure in the Gupta Dynasty earned the title Kaviraja?", choices: ["Chandragupta I", "Asoka", "Raja Samudragupta", "Bindusara"], answer: "Raja Samudragupta" },
          { type: "objective", question: "Jelaskan perbezaan antara perluasan kuasa secara fizikal dengan perluasan kuasa secara keagamaan dalam Tamadun India. / Explain the difference between physical expansion and religious expansion in Indian Civilisation.", answer: "Perluasan fizikal bergantung pada kekuatan tentera dan penaklukan wilayah, manakala perluasan keagamaan merentas sempadan tanpa tentera dengan menyebarkan nilai agama, kemanusiaan dan kedamaian. / Physical expansion relied on military power and territorial conquest, while religious expansion crossed borders without military force by spreading religious values, humanity, and peace." }
        ]
      },
      {
        id: "7-2-tamadun-china",
        name: "7.2 Tamadun China",
        summary: "Topik ini menerangkan perkembangan dinasti Qin dan Han, pendidikan, serta peperiksaan perkhidmatan awam Tamadun China.",
        summary_en: "This topic explains the Qin and Han Dynasties, education, and civil service examinations in Chinese Civilisation.",
        facts: [
          "Tamadun China bermula di Lembah Sungai Huang He.",
          "Maharaja Shi Huangdi daripada Dinasti Qin menyatukan China, menyeragamkan tulisan serta unit timbang dan sukat, dan membina Tembok Besar.",
          "Dinasti Han diasaskan oleh Liu Bang; zaman Maharaja Han Wu Di menyaksikan pembukaan Laluan Sutera dan pelaksanaan peperiksaan awam.",
          "Pendidikan merangkumi peringkat rendah, menengah dan tinggi serta berasaskan teks suci dan ajaran Konfusianisme.",
          "Peperiksaan perkhidmatan awam terdiri daripada Xiucai, Juren dan Jinshi; ia ketat, kompetitif, dan terbuka kepada lelaki tanpa mengira latar belakang."
        ],
        facts_en: [
          "Chinese Civilisation began in the Huang He River Valley.",
          "Emperor Shi Huangdi of the Qin Dynasty unified China, standardized writing, weights and measures, and built the Great Wall.",
          "The Han Dynasty was founded by Liu Bang; Emperor Han Wu Di's reign saw the opening of the Silk Road and civil service examinations.",
          "Education included primary, secondary, and higher levels and was based on sacred texts and Confucian teachings.",
          "Civil service examinations consisted of Xiucai, Juren, and Jinshi; they were strict, competitive, and open to males regardless of background."
        ],
        quiz: [
          { question: "Apakah sumbangan utama Maharaja Shi Huangdi dalam sejarah Tamadun China? / What was the main contribution of Emperor Shi Huangdi in Chinese Civilisation?", choices: ["Mengembangkan ajaran Buddha ke luar negara / Spreading Buddhism abroad", "Menyatukan China dan menyeragamkan sistem tulisan serta unit timbang sukat / Unifying China and standardizing the writing system and weights and measures", "Membangunkan sistem peperiksaan awam pertama / Developing the first civil service exam system", "Membina kapal perdagangan maritim utama / Building major maritime trading vessels"], answer: "Menyatukan China dan menyeragamkan sistem tulisan serta unit timbang sukat / Unifying China and standardizing the writing system and weights and measures" },
          { question: "Apakah matlamat utama seseorang individu menduduki peperiksaan perkhidmatan awam dalam Tamadun China? / What was the primary goal for an individual taking the civil service examination in Chinese Civilisation?", choices: ["Menjadi pahlawan perang / Becoming a war hero", "Meningkatkan taraf sosial dan menjadi pegawai kerajaan / Elevating social status and becoming a government official", "Mendapat lesen untuk berniaga di Laluan Sutera / Obtaining a license to trade along the Silk Road", "Diberi jawatan sebagai maharaja baharu / Being granted the position of a new emperor"], answer: "Meningkatkan taraf sosial dan menjadi pegawai kerajaan / Elevating social status and becoming a government official" },
          { question: "Peperiksaan perkhidmatan awam tahap ketiga, iaitu Jinshi, dijalankan di lokasi manakah? / Where was the third level of the civil service examination, Jinshi, conducted?", choices: ["Peringkat daerah / District level", "Ibu kota daerah / Provincial capital", "Ibu kota kerajaan / Imperial capital", "Di dalam tokong Konfusius / Inside Confucian temples"], answer: "Ibu kota kerajaan / Imperial capital" },
          { type: "objective", question: "Nyatakan tiga ciri utama sistem peperiksaan perkhidmatan awam yang dilaksanakan dalam Tamadun China. / State three main characteristics of the civil service examination system in Chinese Civilisation.", answer: "Peperiksaan sangat kompetitif dan dikawal ketat untuk mengelakkan penipuan, terbuka kepada semua lelaki tanpa mengira latar belakang, dan berteraskan ajaran Konfusianisme. / The examinations were highly competitive and strictly controlled to prevent cheating, open to all males regardless of background, and centred on Confucian teachings." }
        ]
      }
    ]
  },
  {
    id: "bab8",
    name: "Bab 8: Tamadun Islam",
    topics: [
      {
        id: "8-1-latar-belakang-masyarakat-arab",
            name: "8.1 Latar Belakang Masyarakat Arab Sebelum Kedatangan Islam",
            summary: "Topik ini membincangkan masyarakat Arab sebelum Islam, termasuk kehidupan padang pasir, agama, adat, dan kehidupan seharian.",
            summary_en: "This topic discusses Arab society before Islam, including desert life, religion, customs, and daily life.",
            facts: [
              "Masyarakat Arab hidup dalam persekitaran padang pasir dengan gaya hidup nomad dan kampung.",
              "Mereka mengamalkan pelbagai kepercayaan, termasuk penyembahan berhala dan tradisi lisan.",
              "Adat dan kehidupan seharian menekankan nilai kekeluargaan, maruah, dan perdagangan.",
              "Kebudayaan mereka dipengaruhi oleh iklim padang pasir dan hubungan dengan suku-suku lain.",
              "Keadaan masyarakat ini menyediakan latar untuk kemunculan Islam."
            ],
            facts_en: [
              "Arab society lived in a desert environment with nomadic and village lifestyles.",
              "They practiced various beliefs, including idol worship and oral traditions.",
              "Their customs and daily life emphasized family, honor, and trade.",
              "Their culture was shaped by the desert climate and relations with other tribes.",
              "These conditions provided the background for the emergence of Islam."
            ],
            quiz: [
              {
                question: "Bagaimanakah iklim padang pasir mempengaruhi kehidupan masyarakat Arab sebelum Islam? / How did the desert climate affect the life of Arab society before Islam?",
                choices: [
                  "Menentukan gaya hidup nomad dan perdagangan jarak jauh. / It determined a nomadic lifestyle and long-distance trade.",
                  "Menjadikan mereka hidup di bandar besar. / It made them live in large cities.",
                  "Membuat mereka bergantung kepada pertanian moden. / It made them depend on modern agriculture.",
                  "Membolehkan mereka hidup di dalam hutan. / It allowed them to live in forests."
                ],
                answer: "Menentukan gaya hidup nomad dan perdagangan jarak jauh. / It determined a nomadic lifestyle and long-distance trade."
              },
              {
                question: "Apakah salah satu ciri masyarakat Arab sebelum Islam? / What was one characteristic of Arab society before Islam?",
                choices: [
                  "Hidup secara nomad dan di kampung. / Living nomadically and in villages.",
                  "Menetap di bandar metropolitan sahaja. / Living only in metropolitan cities.",
                  "Bergantung sepenuhnya pada mesin dan teknologi moden. / Depending entirely on machines and modern technology.",
                  "Menggunakan kereta api sebagai pengangkutan utama. / Using trains as the main transport."
                ],
                answer: "Hidup secara nomad dan di kampung. / Living nomadically and in villages."
              },
              {
                question: "Mengapakah adat dan nilai kekeluargaan penting dalam masyarakat Arab sebelum Islam? / Why were customs and family values important in pre-Islamic Arab society?",
                choices: [
                  "Kerana mereka membantu menyatukan suku dan masyarakat. / Because they helped unite tribes and communities.",
                  "Kerana mereka menghalang perdagangan. / Because they prevented trade.",
                  "Kerana mereka menjadikan orang hidup bersendirian. / Because they made people live alone.",
                  "Kerana mereka menghapuskan semua undang-undang. / Because they abolished all laws."
                ],
                answer: "Kerana mereka membantu menyatukan suku dan masyarakat. / Because they helped unite tribes and communities."
              },
              {
                type: "objective",
                question: "Nyatakan satu faktor yang membentuk budaya masyarakat Arab sebelum Islam. / State one factor that shaped pre-Islamic Arab culture.",
                answer: "Persekitaran padang pasir dan hubungan antara suku membentuk budaya mereka. / The desert environment and inter-tribal relations shaped their culture."
              }
            ]
          },
          {
            id: "8-2-kemunculan-perkembangan-tamadun-islam",
            name: "8.2 Kemunculan dan Perkembangan Tamadun Islam",
            summary: "Topik ini menerangkan kemunculan Islam dan perkembangan tamadun Islam melalui zaman Khalifah dan kerajaan besar.",
            summary_en: "This topic explains the emergence of Islam and the development of Islamic civilization through the eras of caliphs and great empires.",
            facts: [
              "Islam mula berkembang di Jazirah Arab dan bertapak semasa era Khulafa ar-Rashidin.",
              "Abu Bakar al-Siddiq mengukuhkan umat Islam selepas kewafatan Nabi Muhammad SAW.",
              "Zaman Umar dan Uthman menyaksikan perkembangan wilayah melalui penaklukan dan pentadbiran.",
              "Daulah Umaiyah meluaskan Islam hingga ke Sepanyol, manakala Abbasiyah berkembang hingga Transoxania.",
              "Tamadun Islam mula membina pusat intelektual dan ilmu pengetahuan."
            ],
            facts_en: [
              "Islam began to grow in the Arabian Peninsula and took root during the Rashidun Caliphate.",
              "Abu Bakr al-Siddiq strengthened the Muslim community after the Prophet Muhammad SAW passed away.",
              "The eras of Umar and Uthman saw territorial expansion through conquest and administration.",
              "The Umayyad Caliphate expanded Islam to Spain, while the Abbasid Caliphate reached Transoxania.",
              "Islamic civilization began to establish intellectual centers and scholarship."
            ],
            quiz: [
              {
                question: "Zaman Khalifah manakah yang terkenal kerana perluasan Islam hingga ke Sepanyol? / Which caliphate era is known for expanding Islam to Spain?",
                choices: [
                  "Daulah Umaiyah. / The Umayyad Caliphate.",
                  "Daulah Abbasiyah. / The Abbasid Caliphate.",
                  "Zaman Uthman bin Affan. / The era of Uthman bin Affan.",
                  "Zaman Khalifah Abu Bakar. / The era of Caliph Abu Bakr."
                ],
                answer: "Daulah Umaiyah. / The Umayyad Caliphate."
              },
              {
                question: "Siapakah khalifah yang memperluaskan wilayah Islam dari Sepanyol ke Asia Tengah? / Which caliph extended Islamic rule from Spain to Central Asia?",
                choices: [
                  "Daulah Umaiyah. / The Umayyad Caliphate.",
                  "Daulah Abbasiyah. / The Abbasid Caliphate.",
                  "Daulah Fatimiyah. / The Fatimid Caliphate.",
                  "Daulah Mughal. / The Mughal Empire."
                ],
                answer: "Daulah Umaiyah. / The Umayyad Caliphate."
              },
              {
                question: "Apakah peranan pusat intelektual semasa perkembangan tamadun Islam? / What was the role of intellectual centers during the development of Islamic civilization?",
                choices: [
                  "Menyediakan tempat belajar, sains, dan kajian. / Providing places for learning, science, and research.",
                  "Menjadi pasar untuk barang mewah sahaja. / Being markets for luxury goods only.",
                  "Menghalang komunikasi antara pelajar. / Preventing communication among students.",
                  "Hanya digunakan sebagai benteng tentera. / Used only as military fortresses."
                ],
                answer: "Menyediakan tempat belajar, sains, dan kajian. / Providing places for learning, science, and research."
              },
              {
                type: "objective",
                question: "Nyatakan satu sumbangan tamadun Islam dalam bidang ilmu pengetahuan. / State one contribution of Islamic civilization in the field of knowledge.",
                answer: "Pusat intelektual seperti Baghdad membantu mengembangkan sains dan falsafah. / Intellectual centers like Baghdad helped develop science and philosophy."
              }
            ]
          },
          {
            id: "8-3-ketokohan-nabi-muhammad-sa",
            name: "8.3 Ketokohan Nabi Muhammad SAW sebagai Pemimpin",
            summary: "Topik ini menyorot peranan Nabi Muhammad SAW sebagai pemimpin negara, masyarakat dan tentera dalam sejarah Islam awal.",
            summary_en: "This topic highlights the role of Prophet Muhammad SAW as a state, community, and military leader in early Islamic history.",
            facts: [
              "Nabi Muhammad SAW diiktiraf sebagai pemimpin rohani, politik dan sosial bagi umat Islam.",
              "Beliau mengurus negeri Madinah dan menyusun masyarakat berbilang kaum.",
              "Prinsip kepimpinannya termasuk keadilan, toleransi dan kerjasama antara rakyat.",
              "Sebagai pemimpin tentera, beliau memimpin peristiwa penting seperti Badar, Uhud dan Khandaq.",
              "Kepimpinan beliau membantu membentuk asas negara Islam yang adil dan teratur."
            ],
            facts_en: [
              "Prophet Muhammad SAW is recognized as the spiritual, political, and social leader of Muslims.",
              "He managed the state of Medina and organized a plural society.",
              "His leadership principles included justice, tolerance, and cooperation among people.",
              "As a military leader, he led important events like Badr, Uhud, and the Trench.",
              "His leadership helped build the foundations of a just and orderly Islamic state."
            ],
            persons: [
              {
                name: "Nabi Muhammad SAW",
                role: "Pemimpin Islam",
                description: "Sebagai pemimpin utama, Nabi Muhammad SAW memimpin masyarakat Islam dari segi agama, politik dan pertahanan.",
                description_en: "As the main leader, Prophet Muhammad SAW led the Muslim community in religion, politics, and defense."
              }
            ],
            quiz: [
              {
                question: "Apakah salah satu peristiwa penting yang dipimpin oleh Nabi Muhammad SAW sebagai ketua tentera? / Which major event was led by Prophet Muhammad SAW as a military commander?",
                choices: [
                  "Perang Badar. / The Battle of Badr.",
                  "Perjanjian Hudaibiyah. / The Treaty of Hudaybiyyah.",
                  "Pembukaan Baghdad. / The conquest of Baghdad.",
                  "Perang Uhud. / The Battle of Uhud."
                ],
                answer: "Perang Badar. / The Battle of Badr."
              },
              {
                question: "Apakah prinsip utama kepimpinan Nabi Muhammad SAW dalam masyarakat Madinah? / What was a main leadership principle of Prophet Muhammad SAW in Madinah society?",
                choices: [
                  "Keadilan, toleransi, dan kerjasama. / Justice, tolerance, and cooperation.",
                  "Kekerasan tanpa perbincangan. / Violence without discussion.",
                  "Pengasingan suku-suku. / Segregation of tribes.",
                  "Mengharamkan perdagangan. / Banning trade."
                ],
                answer: "Keadilan, toleransi, dan kerjasama. / Justice, tolerance, and cooperation."
              },
              {
                question: "Apakah maksud Nabi Muhammad SAW mengurus negeri Madinah? / What did it mean for Prophet Muhammad SAW to manage the state of Madinah?",
                choices: [
                  "Menjadi pemimpin politik, sosial dan rohani. / Being a political, social, and spiritual leader.",
                  "Hanya menjalankan upacara keagamaan sahaja. / Only performing religious rituals.",
                  "Menjadi pedagang pasar. / Being a market trader.",
                  "Hanya tinggal di rumah sahaja. / Only staying at home."
                ],
                answer: "Menjadi pemimpin politik, sosial dan rohani. / Being a political, social, and spiritual leader."
              },
              {
                type: "objective",
                question: "Terangkan satu cara Nabi Muhammad SAW menyusun masyarakat berbilang kaum di Madinah. / Explain one way Prophet Muhammad SAW organized the multi-ethnic society in Madinah.",
                answer: "Beliau membina perjanjian dan undang-undang bersama untuk memastikan keamanan antara suku dan agama. / He created agreements and joint laws to ensure peace among tribes and religions."
              }
            ]
          },
          {
            id: "8-4-sumbangan-tamadun-islam",
            name: "8.4 Sumbangan Tamadun Islam kepada Dunia",
            summary: "Topik ini membincangkan sumbangan Tamadun Islam dalam bidang politik, ekonomi, sosial dan ilmu pengetahuan.",
            summary_en: "This topic discusses the contributions of Islamic civilization in politics, economy, society, and knowledge.",
            facts: [
              "Tamadun Islam menyumbang dalam politik melalui sistem khalifah dan undang-undang Islam.",
              "Ekonomi Islam berkembang melalui perdagangan, pertanian dan sistem kewangan berlandaskan zakat.",
              "Aspek sosial termasuk perpaduan, pendidikan dan kemajuan kebudayaan dalam masyarakat Islam.",
              "Pusat intelektual seperti Baghdad menjadi pusat ilmu, sains dan falsafah.",
              "Ilmuan Islam seperti Al-Khwarizmi dan Ibnu Sina memberikan sumbangan penting kepada dunia."
            ],
            facts_en: [
              "Islamic civilization contributed politically through the caliphate system and Islamic law.",
              "Islamic economy developed through trade, agriculture, and finance based on zakat.",
              "Social aspects included unity, education, and cultural advancement in Muslim societies.",
              "Intellectual centers such as Baghdad became hubs for knowledge, science, and philosophy.",
              "Islamic scholars like Al-Khwarizmi and Ibn Sina made important contributions to the world."
            ],
            persons: [
              {
                name: "Al-Khwarizmi",
                role: "Ilmuan Islam",
                description: "Beliau dikenali sebagai bapa algebra dan menyumbang pada perkembangan matematik dalam tamadun Islam.",
                description_en: "He is known as the father of algebra and contributed to the development of mathematics in Islamic civilization."
              }
            ],
            quiz: [
              {
                question: "Apakah sumbangan Al-Khwarizmi kepada dunia ilmu? / What was Al-Khwarizmi's contribution to the world of knowledge?",
                choices: [
                  "Algebra. / Algebra.",
                  "Fizik moden. / Modern physics.",
                  "Penulisan novel. / Novel writing.",
                  "Pertanian. / Agriculture."
                ],
                answer: "Algebra. / Algebra."
              },
              {
                question: "Dalam bidang apakah Al-Khwarizmi paling terkenal? / In which field is Al-Khwarizmi most famous?",
                choices: [
                  "Matematik dan algebra. / Mathematics and algebra.",
                  "Seni bina. / Architecture.",
                  "Perubatan. / Medicine.",
                  "Seni muzik. / Music."
                ],
                answer: "Matematik dan algebra. / Mathematics and algebra."
              },
              {
                question: "Mengapa ilmuan Islam penting dalam tamadun Islam? / Why were Islamic scholars important in Islamic civilization?",
                choices: [
                  "Kerana mereka mengembangkan ilmu dan teknologi. / Because they developed knowledge and technology.",
                  "Kerana mereka membina istana sahaja. / Because they only built palaces.",
                  "Kerana mereka melarang pembelajaran. / Because they banned learning.",
                  "Kerana mereka mengurus hanya perdagangan. / Because they only managed trade."
                ],
                answer: "Kerana mereka mengembangkan ilmu dan teknologi. / Because they developed knowledge and technology."
              },
              {
                type: "objective",
                question: "Nyatakan satu contoh sumbangan tamadun Islam kepada dunia hari ini. / State one example of an Islamic civilization contribution to the world today.",
                answer: "Al-Khwarizmi memperkenalkan algebra yang masih digunakan dalam matematik moden. / Al-Khwarizmi introduced algebra that is still used in modern mathematics."
              }
            ]
          },
          {
            id: "8-5-sumbangan-seni-bina-islam",
            name: "8.5 Sumbangan Tamadun Islam dalam Bidang Seni Bina",
            summary: "Topik ini menerangkan ciri seni bina Islam dan bagaimana ia memberi inspirasi kepada pembinaan masjid, istana, dan ruang awam.",
            summary_en: "This topic explains the features of Islamic architecture and how it inspired the construction of mosques, palaces, and public spaces.",
            facts: [
              "Seni bina Islam terkenal dengan kubah, menara, lengkungan dan corak geometri.",
              "Bangunan seperti masjid dan istana mencerminkan nilai keagamaan dan estetika.",
              "Reka bentuk seni bina Islam sering menggunakan taman, air mancur dan kaligrafi.",
              "Cordoba dan Baghdad adalah contoh bandar dengan bangunan seni bina Islam yang megah.",
              "Sumbangan seni bina Islam terus memberi inspirasi kepada seni bina di seluruh dunia."
            ],
            facts_en: [
              "Islamic architecture is known for domes, minarets, arches, and geometric patterns.",
              "Buildings such as mosques and palaces reflect religious values and aesthetics.",
              "Islamic architectural design often uses gardens, fountains, and calligraphy.",
              "Cordoba and Baghdad are examples of cities with magnificent Islamic architecture.",
              "The contribution of Islamic architecture continues to inspire architecture worldwide."
            ],
            quiz: [
              {
                question: "Apakah salah satu ciri seni bina Islam yang biasa dilihat? / What is one common feature of Islamic architecture?",
                choices: [
                  "Kubah. / Dome.",
                  "Menara jam. / Clock tower.",
                  "Menara radio. / Radio tower.",
                  "Stesen kereta api. / Train station."
                ],
                answer: "Kubah. / Dome."
              },
              {
                question: "Apakah elemen geometri yang sering digunakan dalam seni bina Islam? / What geometric element is often used in Islamic architecture?",
                choices: [
                  "Corak geometri. / Geometric patterns.",
                  "Lukisan potret. / Portrait painting.",
                  "Grafiti moden. / Modern graffiti.",
                  "Reka bentuk kartun. / Cartoon design."
                ],
                answer: "Corak geometri. / Geometric patterns."
              },
              {
                question: "Apakah salah satu fungsi taman dan air mancur dalam seni bina Islam? / What is one function of gardens and fountains in Islamic architecture?",
                choices: [
                  "Mewujudkan suasana damai dan sejuk. / Creating a peaceful and cool environment.",
                  "Menjadi tempat pasaran. / Being a market place.",
                  "Menjadi bilik kelas. / Being a classroom.",
                  "Menyimpan peralatan tentera. / Storing military equipment."
                ],
                answer: "Mewujudkan suasana damai dan sejuk. / Creating a peaceful and cool environment."
              },
              {
                type: "objective",
                question: "Jelaskan satu cara seni bina Islam menunjukkan nilai keagamaan. / Explain one way Islamic architecture shows religious values.",
                answer: "Bangunan seperti masjid menggunakan kubah, kaligrafi, dan ruang yang tenang untuk menunjukkan nilai keagamaan. / Buildings like mosques use domes, calligraphy, and calm spaces to show religious values."
              }
            ]
          }
        ]
      }
  ];

const chapterSelect = document.getElementById("chapter-select");
const topicSelect = document.getElementById("topic-select");
const modeSelect = document.getElementById("mode-select");
const generateBtn = document.getElementById("generate-btn");
const resultEl = document.getElementById("result");

console.log("Loaded chapters:", chapters.map((chapter) => chapter.name));

function populateChapters() {
  chapterSelect.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "-- Pilih Bab --";
  placeholder.disabled = true;
  placeholder.selected = true;
  chapterSelect.appendChild(placeholder);

  chapters.forEach((chapter) => {
    const option = document.createElement("option");
    option.value = chapter.id;
    option.textContent = chapter.name;
    chapterSelect.appendChild(option);
  });

  if (chapters.length > 0) {
    chapterSelect.value = chapters[0].id;
  }
}

function getSelectedChapter() {
  return chapters.find((chapter) => chapter.id === chapterSelect.value);
}

function populateTopics() {
  const chapter = getSelectedChapter();
  topicSelect.innerHTML = "";

  if (!chapter) {
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Sila pilih bab dahulu";
    placeholder.disabled = true;
    placeholder.selected = true;
    topicSelect.appendChild(placeholder);
    return;
  }

  chapter.topics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic.id;
    option.textContent = topic.name;
    topicSelect.appendChild(option);
  });

  if (chapter.topics.length > 0) {
    topicSelect.value = chapter.topics[0].id;
  }
}

function getSelectedTopic() {
  const chapter = getSelectedChapter();
  if (!chapter) {
    return null;
  }

  return chapter.topics.find((topic) => topic.id === topicSelect.value) || chapter.topics[0];
}

function renderFacts(topic) {
  const listItems = topic.facts
    .map((fact, index) => {
      const englishFact = topic.facts_en && topic.facts_en[index]
        ? ` <span class="fact-en">/ ${topic.facts_en[index]}</span>`
        : "";
      return `<li>${fact}${englishFact}</li>`;
    })
    .join("");

  const personsHtml = topic.persons
    ? topic.persons
        .map(
          (person) => `
            <article class="person-item">
              <p><strong>${person.name}</strong> — ${person.role}</p>
              <p>${person.description}</p>
              ${person.description_en ? `<p class="person-en">${person.description_en}</p>` : ""}
            </article>`
        )
        .join("")
    : "";

  const personsSection = personsHtml
    ? `<div class="important-people">
         <p><strong>Tokoh Penting (Malay) / Important People (English):</strong></p>
         ${personsHtml}
       </div>`
    : "";

  return `
    <p><strong>${topic.name}</strong></p>
    <ul>${listItems}</ul>
    ${personsSection}
  `;
}

function renderQuiz(topic) {
  const questionHtml = topic.quiz
    .map((item, index) => {
      const hasChoices = item.choices && item.choices.length > 0;
      const choicesHtml = hasChoices
        ? item.choices
            .map(
              (choice, choiceIndex) =>
                `<li><strong>${String.fromCharCode(65 + choiceIndex)}.</strong> ${choice}</li>`
            )
            .join("")
        : "";

      return `
        <article class="quiz-item">
          <h3>Soalan ${index + 1} / Question ${index + 1}</h3>
          <p><strong>${item.question}</strong></p>
          ${hasChoices ? `<ul>${choicesHtml}</ul>` : ""}
          <p><strong>Jawapan / Answer:</strong> ${item.answer}</p>
        </article>`;
    })
    .join("");

  return `<p><strong>${topic.name}</strong></p>${questionHtml}`;
}

function generate() {
  const topic = getSelectedTopic();
  const mode = modeSelect.value;

  if (!topic) {
    resultEl.innerHTML = "Sila pilih topik yang sah.";
    return;
  }

  let output = "";

  if (mode === "summary-facts") {
    output = renderFacts(topic);
  } else if (mode === "quiz") {
    output = renderQuiz(topic);
  }

  resultEl.innerHTML = output;
}

populateChapters();
populateTopics();
chapterSelect.addEventListener("change", () => {
  populateTopics();
  generate();
});
topicSelect.addEventListener("change", generate);
modeSelect.addEventListener("change", generate);
generateBtn.addEventListener("click", generate);

generate();
