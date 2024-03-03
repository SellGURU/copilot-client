import Api from "./Api";

const useMoch = () => {
  Api.post('/get_additional_data_for_test',
  {
    "additional_data": {
        "Age": "int",
        "Gender": [
            "Male",
            "Female"
        ],
        "Goals ": "textarea",
        "Height (cm)": "float",
        "Weight (kg)": "float",
        "Educational Level": [
            "Primary School Level",
            "Graduate Degree Level"
        ],
        "Medical Conditions": "str",
        "Language": [
            "English"
        ]
    }
  }
  )
  Api.post('/flow_for_test',
{
  "answer": {
      "Command": "file_information",
      "answer": "How can I help you today?",
      "suggestion_list": [],
      "products": {},
      "photo_file": "",
      "audio_file_name": "audio_1709130789_71a92e5c13_English_en-US-JennyNeural.wav",
      "video_file": null,
      "audio_file": null
  },
  "currentconverationid": 22171315361,
  "instanceid": "293f8f61-7e7e-41a9-8635-10cff947965f",
  "message_state": true,
  "message_key": null,
  "resources ": []
}  
  )
  Api.post('/get_related_nodes_for_test',[
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "With some careful meal planning, and by eating a variety and balance of different vegetarian or vegan foods, vegetarian and vegan mums-to-be should be able to get all the nutrients that they and their baby need. A lot of the information below is also relevant before conception, to make sure the body’s nutrient stores are ready for pregnancy, and afterwards during breastfeeding. Like any healthy diet, you should make sure you include foods from the four main food groups: Plenty of starchy carbohydrates. Choose wholegrain or higher fibre options where possible, like wholewheat pasta, wholegrain breakfast cereals, brown rice, or potatoes with their skins, as fibre is an important part of a healthy diet and can help to prevent constipation (common in pregnancy). Plenty of fruit and vegetables, which can be fresh, frozen or tinned. Try to have five portions a day and aim for a variety of different types.",
            "percent": 0.8263776848378723
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "Protein is made up of amino acids, which are the building blocks of your body's cells – and of your baby's. Essential amino acids are those that the body cannot make itself and so are needed from the diet. Most vegans and vegetarians get enough protein from their diets. However, it is important to consume a range of different proteins to make sure you get enough of all the different essential amino acids. Soya is a particularly good source of protein for vegetarians and vegans as it contains a good range of essential amino acids.",
            "percent": 0.8203981187196433
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "A varied and balanced vegetarian diet should provide enough nutrients for you and your baby during pregnancy. But you might find it more difficult to get enough iron and vitamin B12. Talk to a midwife or doctor about how to make sure you're getting enough of these important nutrients. If you're vegan or you follow a restricted diet because of a food intolerance (for example, a gluten-free diet for coeliac disease) or for religious reasons, talk to a midwife or GP. Ask to be referred to a dietitian for advice on how to make sure you're getting all the nutrients you need for you and your baby.",
            "percent": 0.8193622185518005
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "Eat plenty of fruit and vegetables. Aim for at least 5 A DAY and make sure you eat a variety of types and colours! Base your meals on starchy carbohydrates, such as bread, rice, pasta or potatoes. Where possible, go for wholegrain varieties, and potatoes with skins, as these contain more fibre. Some breakfast cereals are fortified with several essential vitamins and minerals, including iron, vitamin B12 and riboflavin (check the label). Where possible, go for wholegrain varieties. Eat a range of foods containing plant protein. Good sources of essential amino acids for vegetarians include dairy foods and eggs, and sources suitable for both vegetarians and vegans include beans and other pulses, soya dairy alternatives, nuts, and tofu. Milk, cheese and yogurt are a good source of calcium, iodine, vitamin B12 and riboflavin if you are vegetarian. You should eat a moderate amount of these in your diet. Where possible, choose lower fat or reduced fat products, and those lower in sugar.",
            "percent": 0.8189107100252436
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "A healthy, balanced diet is also important when you are breastfeeding to help your baby get all the nutrients needed to grow. For vegetarian and vegan mums, the nutrients mentioned previously for pregnancy are things to still be aware of during breastfeeding.\n\n\n\n\n\nTop tips for vegetarian and vegan mums-to-be (British Nutrition Foundation)\n\nEat plenty of fruit and vegetables. Aim for at least 5 A DAY and make sure you eat a variety of types and colours!\n\nBase your meals on starchy carbohydrates, such as bread, rice, pasta or potatoes. Where possible, go for wholegrain varieties, and potatoes with skins, as these contain more fibre.\n\nSome breakfast cereals are fortified with several essential vitamins and minerals, including iron, vitamin B12 and riboflavin (check the label). Where possible, go for wholegrain varieties.\n\nEat a range of foods containing plant protein.",
            "percent": 0.8171799032805938
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "Eat plenty of fruit and vegetables. Aim for at least 5 A DAY and make sure you eat a variety of types and colours! Base your meals on starchy carbohydrates, such as bread, rice, pasta or potatoes. Where possible, go for wholegrain varieties, and potatoes with skins, as these contain more fibre. Some breakfast cereals are fortified with several essential vitamins and minerals, including iron, vitamin B12 and riboflavin (check the label). Where possible, go for wholegrain varieties. Eat a range of foods containing plant protein. Good sources of essential amino acids for vegetarians include dairy foods and eggs, and sources suitable for both vegetarians and vegans include beans and other pulses, soya dairy alternatives, nuts, and tofu. Milk, cheese and yogurt are a good source of calcium, iodine, vitamin B12 and riboflavin if you are vegetarian. You should eat a moderate amount of these in your diet. Where possible, choose lower fat or reduced fat products, and those lower in sugar.",
            "percent": 0.8284123178767608
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "With some careful meal planning, and by eating a variety and balance of different vegetarian or vegan foods, vegetarian and vegan mums-to-be should be able to get all the nutrients that they and their baby need. A lot of the information below is also relevant before conception, to make sure the body’s nutrient stores are ready for pregnancy, and afterwards during breastfeeding. Like any healthy diet, you should make sure you include foods from the four main food groups: Plenty of starchy carbohydrates. Choose wholegrain or higher fibre options where possible, like wholewheat pasta, wholegrain breakfast cereals, brown rice, or potatoes with their skins, as fibre is an important part of a healthy diet and can help to prevent constipation (common in pregnancy). Plenty of fruit and vegetables, which can be fresh, frozen or tinned. Try to have five portions a day and aim for a variety of different types.",
            "percent": 0.8256713339615865
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "A healthy, balanced diet is also important when you are breastfeeding to help your baby get all the nutrients needed to grow. For vegetarian and vegan mums, the nutrients mentioned previously for pregnancy are things to still be aware of during breastfeeding.\n\n\n\n\n\nTop tips for vegetarian and vegan mums-to-be (British Nutrition Foundation)\n\nEat plenty of fruit and vegetables. Aim for at least 5 A DAY and make sure you eat a variety of types and colours!\n\nBase your meals on starchy carbohydrates, such as bread, rice, pasta or potatoes. Where possible, go for wholegrain varieties, and potatoes with skins, as these contain more fibre.\n\nSome breakfast cereals are fortified with several essential vitamins and minerals, including iron, vitamin B12 and riboflavin (check the label). Where possible, go for wholegrain varieties.\n\nEat a range of foods containing plant protein.",
            "percent": 0.8242966093727837
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "A varied and balanced vegetarian diet should provide enough nutrients for you and your baby during pregnancy. But you might find it more difficult to get enough iron and vitamin B12. Talk to a midwife or doctor about how to make sure you're getting enough of these important nutrients. If you're vegan or you follow a restricted diet because of a food intolerance (for example, a gluten-free diet for coeliac disease) or for religious reasons, talk to a midwife or GP. Ask to be referred to a dietitian for advice on how to make sure you're getting all the nutrients you need for you and your baby.",
            "percent": 0.8231673763854903
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "If you're a vegan, you also need to make sure you get enough . This is because non-vegans get most of their calcium from dairy foods. Good sources of calcium for vegans include: dark green leafy vegetables pulses fortified unsweetened soya, pea and oat drinks brown and white bread calcium-set tofu sesame seeds and tahini dried fruit Talk to your midwife or doctor about how you can get all the nutrients you need for you and your baby.",
            "percent": 0.8210986158047363
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "Eat plenty of fruit and vegetables. Aim for at least 5 A DAY and make sure you eat a variety of types and colours! Base your meals on starchy carbohydrates, such as bread, rice, pasta or potatoes. Where possible, go for wholegrain varieties, and potatoes with skins, as these contain more fibre. Some breakfast cereals are fortified with several essential vitamins and minerals, including iron, vitamin B12 and riboflavin (check the label). Where possible, go for wholegrain varieties. Eat a range of foods containing plant protein. Good sources of essential amino acids for vegetarians include dairy foods and eggs, and sources suitable for both vegetarians and vegans include beans and other pulses, soya dairy alternatives, nuts, and tofu. Milk, cheese and yogurt are a good source of calcium, iodine, vitamin B12 and riboflavin if you are vegetarian. You should eat a moderate amount of these in your diet. Where possible, choose lower fat or reduced fat products, and those lower in sugar.",
            "percent": 0.8151342735493303
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "With some careful meal planning, and by eating a variety and balance of different vegetarian or vegan foods, vegetarian and vegan mums-to-be should be able to get all the nutrients that they and their baby need. A lot of the information below is also relevant before conception, to make sure the body’s nutrient stores are ready for pregnancy, and afterwards during breastfeeding. Like any healthy diet, you should make sure you include foods from the four main food groups: Plenty of starchy carbohydrates. Choose wholegrain or higher fibre options where possible, like wholewheat pasta, wholegrain breakfast cereals, brown rice, or potatoes with their skins, as fibre is an important part of a healthy diet and can help to prevent constipation (common in pregnancy). Plenty of fruit and vegetables, which can be fresh, frozen or tinned. Try to have five portions a day and aim for a variety of different types.",
            "percent": 0.8112936609305991
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "Good sources of  for vegetarians and vegans include: pulses dark green vegetables wholemeal bread and flour nuts fortified breakfast cereals (with added iron) dried fruit, such as apricots",
            "percent": 0.8106771109073233
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "Protein is made up of amino acids, which are the building blocks of your body's cells – and of your baby's. Essential amino acids are those that the body cannot make itself and so are needed from the diet. Most vegans and vegetarians get enough protein from their diets. However, it is important to consume a range of different proteins to make sure you get enough of all the different essential amino acids. Soya is a particularly good source of protein for vegetarians and vegans as it contains a good range of essential amino acids.",
            "percent": 0.8102483551630959
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "If you're a vegan, you also need to make sure you get enough . This is because non-vegans get most of their calcium from dairy foods. Good sources of calcium for vegans include: dark green leafy vegetables pulses fortified unsweetened soya, pea and oat drinks brown and white bread calcium-set tofu sesame seeds and tahini dried fruit Talk to your midwife or doctor about how you can get all the nutrients you need for you and your baby.",
            "percent": 0.8074438304191126
        }
    }
  ])
  Api.post('/get_nodes_edges',{
    "nodes": [
        {
            "id": "heartbeat",
            "label": "heartbeat",
            "size": 0.2
        },
        {
            "id": "fluctuation",
            "label": "fluctuation",
            "size": 0.2
        },
        {
            "id": "physiological",
            "label": "physiological",
            "size": 0.2
        },
        {
            "id": "fractal",
            "label": "fractal",
            "size": 0.2
        },
        {
            "id": "detrended",
            "label": "detrended",
            "size": 0.2
        },
        {
            "id": "exercise",
            "label": "exercise",
            "size": 4.699999999999999
        },
        {
            "id": "analysis",
            "label": "analysis",
            "size": 0.2
        },
        {
            "id": "aerobic",
            "label": "aerobic",
            "size": 4.300000000000001
        },
        {
            "id": "Biomarkers and Predictive Indicators of Longevity",
            "label": "Biomarkers and Predictive Indicators of Longevity",
            "size": 5.4999999999999964
        },
        {
            "id": "Biomarker Discovery",
            "label": "Biomarker Discovery",
            "size": 1.8000000000000005
        },
        {
            "id": "Lifestyle and Dietary Interventions",
            "label": "Lifestyle and Dietary Interventions",
            "size": 12.89999999999997
        },
        {
            "id": "Physical Fitness and Health(Sports and Exercise)",
            "label": "Physical Fitness and Health(Sports and Exercise)",
            "size": 8.299999999999986
        },
        {
            "id": "older",
            "label": "older",
            "size": 0.2
        },
        {
            "id": "aging",
            "label": "aging",
            "size": 19.300000000000004
        },
        {
            "id": "physical",
            "label": "physical",
            "size": 1.5000000000000002
        },
        {
            "id": "sport",
            "label": "sport",
            "size": 0.2
        },
        {
            "id": "longevity",
            "label": "longevity",
            "size": 11.499999999999975
        },
        {
            "id": "sustained",
            "label": "sustained",
            "size": 0.2
        },
        {
            "id": "adults",
            "label": "adults",
            "size": 0.2
        },
        {
            "id": "activity",
            "label": "activity",
            "size": 1.4000000000000001
        },
        {
            "id": "ageing",
            "label": "ageing",
            "size": 2.800000000000001
        },
        {
            "id": "vigorous",
            "label": "vigorous",
            "size": 0.1
        },
        {
            "id": "expectancy",
            "label": "expectancy",
            "size": 0.1
        },
        {
            "id": "exhort",
            "label": "exhort",
            "size": 0.1
        },
        {
            "id": "mortality",
            "label": "mortality",
            "size": 2.9000000000000012
        },
        {
            "id": "doses",
            "label": "doses",
            "size": 0.1
        },
        {
            "id": "creatine",
            "label": "creatine",
            "size": 0.1
        },
        {
            "id": "atp",
            "label": "atp",
            "size": 0.2
        },
        {
            "id": "metabolic",
            "label": "metabolic",
            "size": 3.4000000000000017
        },
        {
            "id": "metabolism",
            "label": "metabolism",
            "size": 4.799999999999999
        },
        {
            "id": "phosphorylation",
            "label": "phosphorylation",
            "size": 0.2
        },
        {
            "id": "mitochondrial",
            "label": "mitochondrial",
            "size": 1.2
        },
        {
            "id": "mitochondria",
            "label": "mitochondria",
            "size": 1.5000000000000002
        },
        {
            "id": "mitdna",
            "label": "mitdna",
            "size": 0.1
        },
        {
            "id": "Principles and Mechanisms of Aging",
            "label": "Principles and Mechanisms of Aging",
            "size": 5.099999999999998
        },
        {
            "id": "Mitochondrial Dysfunction and Longevity",
            "label": "Mitochondrial Dysfunction and Longevity",
            "size": 0.4
        },
        {
            "id": "cardiovascular",
            "label": "cardiovascular",
            "size": 1.2
        },
        {
            "id": "circadian",
            "label": "circadian",
            "size": 0.1
        },
        {
            "id": "endurance",
            "label": "endurance",
            "size": 0.8999999999999999
        },
        {
            "id": "drosophila",
            "label": "drosophila",
            "size": 0.2
        },
        {
            "id": "Environmental and Social Wellbeing",
            "label": "Environmental and Social Wellbeing",
            "size": 0.9999999999999999
        },
        {
            "id": "Environmental Exposures and Aging",
            "label": "Environmental Exposures and Aging",
            "size": 0.8999999999999999
        },
        {
            "id": "health",
            "label": "health",
            "size": 3.1000000000000014
        },
        {
            "id": "epidemiology",
            "label": "epidemiology",
            "size": 1.6000000000000003
        },
        {
            "id": "leisure",
            "label": "leisure",
            "size": 0.30000000000000004
        },
        {
            "id": "diet",
            "label": "diet",
            "size": 7.899999999999988
        },
        {
            "id": "regeneration",
            "label": "regeneration",
            "size": 0.5
        },
        {
            "id": "prolonged",
            "label": "prolonged",
            "size": 0.8999999999999999
        },
        {
            "id": "feeding",
            "label": "feeding",
            "size": 0.5
        },
        {
            "id": "fasting",
            "label": "fasting",
            "size": 1.7000000000000004
        },
        {
            "id": "Nutritional Interventions for Age",
            "label": "Nutritional Interventions for Age",
            "size": 1.6000000000000003
        },
        {
            "id": "related Diseases and Cellular Repair",
            "label": "related Diseases and Cellular Repair",
            "size": 1.6000000000000003
        },
        {
            "id": "Microbiome and Longevity",
            "label": "Microbiome and Longevity",
            "size": 1.4000000000000001
        },
        {
            "id": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "label": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "size": 1.2
        },
        {
            "id": "Healthy Aging",
            "label": "Healthy Aging",
            "size": 4.000000000000002
        },
        {
            "id": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "label": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "size": 1.2
        },
        {
            "id": "being",
            "label": "being",
            "size": 1.2
        },
        {
            "id": "dietary",
            "label": "dietary",
            "size": 4.4
        },
        {
            "id": "Strategies for Promoting Longevity and Wellness in Aging",
            "label": "Strategies for Promoting Longevity and Wellness in Aging",
            "size": 2.500000000000001
        },
        {
            "id": "Case Reports on Longevity",
            "label": "Case Reports on Longevity",
            "size": 0.4
        },
        {
            "id": "Exceptional Aging and Interventions in Case Studies",
            "label": "Exceptional Aging and Interventions in Case Studies",
            "size": 0.2
        },
        {
            "id": "The Role of Resilience and Impact of Interventions on Healthspan",
            "label": "The Role of Resilience and Impact of Interventions on Healthspan",
            "size": 0.2
        },
        {
            "id": "prolonging",
            "label": "prolonging",
            "size": 2.700000000000001
        },
        {
            "id": "prolong",
            "label": "prolong",
            "size": 0.1
        },
        {
            "id": "lifespan",
            "label": "lifespan",
            "size": 8.999999999999984
        },
        {
            "id": "apoptosis",
            "label": "apoptosis",
            "size": 0.7999999999999999
        },
        {
            "id": "mutation",
            "label": "mutation",
            "size": 0.9999999999999999
        },
        {
            "id": "nucleotide",
            "label": "nucleotide",
            "size": 0.7
        },
        {
            "id": "dna",
            "label": "dna",
            "size": 1.0999999999999999
        },
        {
            "id": "Cellular Senescence and Aging",
            "label": "Cellular Senescence and Aging",
            "size": 0.7999999999999999
        },
        {
            "id": "DNA Repair Mechanisms and Aging",
            "label": "DNA Repair Mechanisms and Aging",
            "size": 0.7
        },
        {
            "id": "Genomic Instability and Aging",
            "label": "Genomic Instability and Aging",
            "size": 1.5000000000000002
        },
        {
            "id": "Theoretical Frameworks and Longevity Models",
            "label": "Theoretical Frameworks and Longevity Models",
            "size": 0.9999999999999999
        },
        {
            "id": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "label": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "size": 0.30000000000000004
        },
        {
            "id": "Genetic Biomarkers and Epigenetic Discoveries",
            "label": "Genetic Biomarkers and Epigenetic Discoveries",
            "size": 1.0999999999999999
        },
        {
            "id": "Geroscience",
            "label": "Geroscience",
            "size": 1.3
        },
        {
            "id": "Interdisciplinary Approaches within Geroscience",
            "label": "Interdisciplinary Approaches within Geroscience",
            "size": 0.7999999999999999
        },
        {
            "id": "ercc1",
            "label": "ercc1",
            "size": 2.400000000000001
        },
        {
            "id": "Epigenetic Regulation of Aging",
            "label": "Epigenetic Regulation of Aging",
            "size": 1.2
        },
        {
            "id": "Inflammation and Autophagy in Aging",
            "label": "Inflammation and Autophagy in Aging",
            "size": 0.5
        },
        {
            "id": "Evolutionary Perspectives on Longevity",
            "label": "Evolutionary Perspectives on Longevity",
            "size": 0.7
        },
        {
            "id": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "label": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "size": 0.9999999999999999
        },
        {
            "id": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "label": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "size": 1.3
        },
        {
            "id": "Definition and Scope of Geroscience",
            "label": "Definition and Scope of Geroscience",
            "size": 0.30000000000000004
        },
        {
            "id": "Pharmacological and Molecular Interventions",
            "label": "Pharmacological and Molecular Interventions",
            "size": 1.3
        },
        {
            "id": "Anti",
            "label": "Anti",
            "size": 0.7
        },
        {
            "id": "aging Pharmacology",
            "label": "aging Pharmacology",
            "size": 0.7
        },
        {
            "id": "Preventive Medicine",
            "label": "Preventive Medicine",
            "size": 0.5
        },
        {
            "id": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "label": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "size": 0.1
        },
        {
            "id": "Clinical Implications",
            "label": "Clinical Implications",
            "size": 0.2
        },
        {
            "id": "Integrating cutting",
            "label": "Integrating cutting",
            "size": 0.2
        },
        {
            "id": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "label": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "size": 0.2
        },
        {
            "id": "Technological Advancements in Longevity",
            "label": "Technological Advancements in Longevity",
            "size": 0.2
        },
        {
            "id": "Emerging Technologies, Big Data, and AI in Research",
            "label": "Emerging Technologies, Big Data, and AI in Research",
            "size": 0.2
        },
        {
            "id": "enzymes",
            "label": "enzymes",
            "size": 0.4
        },
        {
            "id": "antioxidant",
            "label": "antioxidant",
            "size": 0.5
        },
        {
            "id": "antioxidants",
            "label": "antioxidants",
            "size": 0.5
        },
        {
            "id": "ros",
            "label": "ros",
            "size": 0.1
        },
        {
            "id": "scavenger",
            "label": "scavenger",
            "size": 0.4
        },
        {
            "id": "oxidative",
            "label": "oxidative",
            "size": 1.0999999999999999
        },
        {
            "id": "radicals",
            "label": "radicals",
            "size": 0.4
        },
        {
            "id": "free",
            "label": "free",
            "size": 0.5
        },
        {
            "id": "antioxidantactivity",
            "label": "antioxidantactivity",
            "size": 0.1
        },
        {
            "id": "supplementation",
            "label": "supplementation",
            "size": 0.5
        },
        {
            "id": "antioxidantstatus",
            "label": "antioxidantstatus",
            "size": 0.2
        },
        {
            "id": "Physical and Cognitive Activities",
            "label": "Physical and Cognitive Activities",
            "size": 0.30000000000000004
        },
        {
            "id": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "label": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "size": 0.30000000000000004
        },
        {
            "id": "supplements",
            "label": "supplements",
            "size": 0.30000000000000004
        },
        {
            "id": "wellness",
            "label": "wellness",
            "size": 0.30000000000000004
        },
        {
            "id": "Mind",
            "label": "Mind",
            "size": 0.4
        },
        {
            "id": "Body Approaches (Meditation, Yoga)",
            "label": "Body Approaches (Meditation, Yoga)",
            "size": 0.4
        },
        {
            "id": "cholesterol",
            "label": "cholesterol",
            "size": 0.6
        },
        {
            "id": "psyllium",
            "label": "psyllium",
            "size": 0.6
        },
        {
            "id": "triglycerides",
            "label": "triglycerides",
            "size": 0.6
        },
        {
            "id": "Evidence",
            "label": "Evidence",
            "size": 0.30000000000000004
        },
        {
            "id": "Based Practices and Guidelines for Preventive Health Care",
            "label": "Based Practices and Guidelines for Preventive Health Care",
            "size": 0.30000000000000004
        },
        {
            "id": "hypertension",
            "label": "hypertension",
            "size": 0.1
        },
        {
            "id": "cardiac",
            "label": "cardiac",
            "size": 0.1
        },
        {
            "id": "meditation",
            "label": "meditation",
            "size": 0.1
        },
        {
            "id": "biofeedback",
            "label": "biofeedback",
            "size": 0.1
        },
        {
            "id": "kinase",
            "label": "kinase",
            "size": 0.2
        },
        {
            "id": "hallmarks",
            "label": "hallmarks",
            "size": 0.7999999999999999
        },
        {
            "id": "yeast",
            "label": "yeast",
            "size": 0.2
        },
        {
            "id": "proteomic",
            "label": "proteomic",
            "size": 1.0999999999999999
        },
        {
            "id": "rnas",
            "label": "rnas",
            "size": 0.2
        },
        {
            "id": "rna",
            "label": "rna",
            "size": 0.2
        },
        {
            "id": "mrna",
            "label": "mrna",
            "size": 0.2
        },
        {
            "id": "alzheimer",
            "label": "alzheimer",
            "size": 0.8999999999999999
        },
        {
            "id": "Senolytic Therapies and Hormonal Interventions",
            "label": "Senolytic Therapies and Hormonal Interventions",
            "size": 0.4
        },
        {
            "id": "vitamin",
            "label": "vitamin",
            "size": 0.1
        },
        {
            "id": "interventions",
            "label": "interventions",
            "size": 0.1
        },
        {
            "id": "omega-3",
            "label": "omega-3",
            "size": 0.1
        },
        {
            "id": "healthy",
            "label": "healthy",
            "size": 1.2
        },
        {
            "id": "fitness",
            "label": "fitness",
            "size": 2.400000000000001
        },
        {
            "id": "fitness9",
            "label": "fitness9",
            "size": 0.1
        },
        {
            "id": "degenerative",
            "label": "degenerative",
            "size": 0.1
        },
        {
            "id": "lifesaving",
            "label": "lifesaving",
            "size": 0.1
        },
        {
            "id": "screening",
            "label": "screening",
            "size": 0.1
        },
        {
            "id": "mammography",
            "label": "mammography",
            "size": 0.1
        },
        {
            "id": "overdiagnosis",
            "label": "overdiagnosis",
            "size": 0.1
        },
        {
            "id": "mammographic",
            "label": "mammographic",
            "size": 0.1
        },
        {
            "id": "Screening for Early Interventions and Disease Prevention",
            "label": "Screening for Early Interventions and Disease Prevention",
            "size": 0.1
        },
        {
            "id": "chronic",
            "label": "chronic",
            "size": 0.30000000000000004
        },
        {
            "id": "conceptofexerciseismedicine",
            "label": "conceptofexerciseismedicine",
            "size": 0.1
        },
        {
            "id": "rna-seq",
            "label": "rna-seq",
            "size": 1.3
        },
        {
            "id": "transcriptomics",
            "label": "transcriptomics",
            "size": 1.4000000000000001
        },
        {
            "id": "senescence",
            "label": "senescence",
            "size": 1.3
        },
        {
            "id": "lifetime",
            "label": "lifetime",
            "size": 0.5
        },
        {
            "id": "proliferate",
            "label": "proliferate",
            "size": 0.5
        },
        {
            "id": "inflammaging",
            "label": "inflammaging",
            "size": 1.3
        },
        {
            "id": "inflammation",
            "label": "inflammation",
            "size": 1.0999999999999999
        },
        {
            "id": "aged",
            "label": "aged",
            "size": 1.6000000000000003
        },
        {
            "id": "transcriptomic",
            "label": "transcriptomic",
            "size": 0.4
        },
        {
            "id": "genes",
            "label": "genes",
            "size": 1.6000000000000003
        },
        {
            "id": "old",
            "label": "old",
            "size": 0.2
        },
        {
            "id": "epidermal",
            "label": "epidermal",
            "size": 0.1
        },
        {
            "id": "skin",
            "label": "skin",
            "size": 0.1
        },
        {
            "id": "macrophages",
            "label": "macrophages",
            "size": 0.30000000000000004
        },
        {
            "id": "inflammatory",
            "label": "inflammatory",
            "size": 0.2
        },
        {
            "id": "macrophage",
            "label": "macrophage",
            "size": 0.1
        },
        {
            "id": "interstitial",
            "label": "interstitial",
            "size": 1.5000000000000002
        },
        {
            "id": "growth",
            "label": "growth",
            "size": 1.5000000000000002
        },
        {
            "id": "biomarker",
            "label": "biomarker",
            "size": 2.3000000000000007
        },
        {
            "id": "tumor",
            "label": "tumor",
            "size": 1.5000000000000002
        },
        {
            "id": "factor",
            "label": "factor",
            "size": 1.5000000000000002
        },
        {
            "id": "15",
            "label": "15",
            "size": 1.5000000000000002
        },
        {
            "id": "biomarkers",
            "label": "biomarkers",
            "size": 4.100000000000001
        },
        {
            "id": "abnormality",
            "label": "abnormality",
            "size": 1.5000000000000002
        },
        {
            "id": "lung",
            "label": "lung",
            "size": 1.5000000000000002
        },
        {
            "id": "differentiation",
            "label": "differentiation",
            "size": 1.5000000000000002
        },
        {
            "id": "fibrosis",
            "label": "fibrosis",
            "size": 1.4000000000000001
        },
        {
            "id": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "label": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "size": 0.2
        },
        {
            "id": "pulmonary",
            "label": "pulmonary",
            "size": 0.30000000000000004
        },
        {
            "id": "bronchiectasis",
            "label": "bronchiectasis",
            "size": 0.30000000000000004
        },
        {
            "id": "cytokine",
            "label": "cytokine",
            "size": 0.8999999999999999
        },
        {
            "id": "copdgene",
            "label": "copdgene",
            "size": 0.1
        },
        {
            "id": "gdf15",
            "label": "gdf15",
            "size": 0.7999999999999999
        },
        {
            "id": "tgf",
            "label": "tgf",
            "size": 0.7999999999999999
        },
        {
            "id": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "label": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "size": 0.30000000000000004
        },
        {
            "id": "exercise—aging",
            "label": "exercise—aging",
            "size": 0.2
        },
        {
            "id": "fatigue",
            "label": "fatigue",
            "size": 0.1
        },
        {
            "id": "aerobically",
            "label": "aerobically",
            "size": 0.2
        },
        {
            "id": "muscular",
            "label": "muscular",
            "size": 0.1
        },
        {
            "id": "strength",
            "label": "strength",
            "size": 0.1
        },
        {
            "id": "rehabilitation",
            "label": "rehabilitation",
            "size": 0.1
        },
        {
            "id": "muscle",
            "label": "muscle",
            "size": 0.1
        },
        {
            "id": "occupational",
            "label": "occupational",
            "size": 0.1
        },
        {
            "id": "jogging",
            "label": "jogging",
            "size": 0.30000000000000004
        },
        {
            "id": "sedentary",
            "label": "sedentary",
            "size": 0.7999999999999999
        },
        {
            "id": "cardio",
            "label": "cardio",
            "size": 1.0999999999999999
        },
        {
            "id": "Preventative Healthcare and Routine Practices for Aging Population",
            "label": "Preventative Healthcare and Routine Practices for Aging Population",
            "size": 0.30000000000000004
        },
        {
            "id": "bmi",
            "label": "bmi",
            "size": 0.1
        },
        {
            "id": "neuropsychology",
            "label": "neuropsychology",
            "size": 0.1
        },
        {
            "id": "consumption",
            "label": "consumption",
            "size": 0.1
        },
        {
            "id": "nutritionally",
            "label": "nutritionally",
            "size": 0.1
        },
        {
            "id": "nutritional",
            "label": "nutritional",
            "size": 0.7999999999999999
        },
        {
            "id": "diets",
            "label": "diets",
            "size": 2.9000000000000012
        },
        {
            "id": "food4healthylife",
            "label": "food4healthylife",
            "size": 0.30000000000000004
        },
        {
            "id": "nutrigrade",
            "label": "nutrigrade",
            "size": 0.30000000000000004
        },
        {
            "id": "vegetables",
            "label": "vegetables",
            "size": 0.30000000000000004
        },
        {
            "id": "stress",
            "label": "stress",
            "size": 0.1
        },
        {
            "id": "erythrocyte",
            "label": "erythrocyte",
            "size": 0.1
        },
        {
            "id": "erythrocytes",
            "label": "erythrocytes",
            "size": 0.1
        },
        {
            "id": "life",
            "label": "life",
            "size": 0.1
        },
        {
            "id": "span",
            "label": "span",
            "size": 0.1
        },
        {
            "id": "glutathione",
            "label": "glutathione",
            "size": 0.1
        },
        {
            "id": "obesity",
            "label": "obesity",
            "size": 0.5
        },
        {
            "id": "runners",
            "label": "runners",
            "size": 0.1
        },
        {
            "id": "adipose",
            "label": "adipose",
            "size": 0.1
        },
        {
            "id": "calorie",
            "label": "calorie",
            "size": 0.8999999999999999
        },
        {
            "id": "adiposity",
            "label": "adiposity",
            "size": 0.1
        },
        {
            "id": "vegan",
            "label": "vegan",
            "size": 0.30000000000000004
        },
        {
            "id": "igf",
            "label": "igf",
            "size": 1.9000000000000006
        },
        {
            "id": "igfbp",
            "label": "igfbp",
            "size": 0.30000000000000004
        },
        {
            "id": "neurogenesis",
            "label": "neurogenesis",
            "size": 0.1
        },
        {
            "id": "carcinogenesis",
            "label": "carcinogenesis",
            "size": 0.2
        },
        {
            "id": "system",
            "label": "system",
            "size": 0.30000000000000004
        },
        {
            "id": "mimetic",
            "label": "mimetic",
            "size": 0.30000000000000004
        },
        {
            "id": "innate",
            "label": "innate",
            "size": 0.30000000000000004
        },
        {
            "id": "intermittent",
            "label": "intermittent",
            "size": 0.30000000000000004
        },
        {
            "id": "metabolome",
            "label": "metabolome",
            "size": 0.2
        },
        {
            "id": "metabolomic",
            "label": "metabolomic",
            "size": 0.2
        },
        {
            "id": "immune",
            "label": "immune",
            "size": 0.30000000000000004
        },
        {
            "id": "anti-inﬂammatory",
            "label": "anti-inﬂammatory",
            "size": 0.30000000000000004
        },
        {
            "id": "immunology",
            "label": "immunology",
            "size": 0.30000000000000004
        },
        {
            "id": "nutrition",
            "label": "nutrition",
            "size": 0.7
        },
        {
            "id": "homeostasis",
            "label": "homeostasis",
            "size": 0.1
        },
        {
            "id": "genetics",
            "label": "genetics",
            "size": 0.2
        },
        {
            "id": "nutrient",
            "label": "nutrient",
            "size": 0.5
        },
        {
            "id": "nutrients",
            "label": "nutrients",
            "size": 0.2
        },
        {
            "id": "human",
            "label": "human",
            "size": 0.4
        },
        {
            "id": "restriction",
            "label": "restriction",
            "size": 0.5
        },
        {
            "id": "longevity19",
            "label": "longevity19",
            "size": 0.2
        },
        {
            "id": "macronutrient",
            "label": "macronutrient",
            "size": 1.8000000000000005
        },
        {
            "id": "obese",
            "label": "obese",
            "size": 0.6
        },
        {
            "id": "lifespans",
            "label": "lifespans",
            "size": 0.8999999999999999
        },
        {
            "id": "lifespan89",
            "label": "lifespan89",
            "size": 0.2
        },
        {
            "id": "insulin",
            "label": "insulin",
            "size": 0.30000000000000004
        },
        {
            "id": "glycemic",
            "label": "glycemic",
            "size": 0.30000000000000004
        },
        {
            "id": "athletes",
            "label": "athletes",
            "size": 0.4
        },
        {
            "id": "sports",
            "label": "sports",
            "size": 0.2
        },
        {
            "id": "oxygen",
            "label": "oxygen",
            "size": 0.2
        },
        {
            "id": "rat",
            "label": "rat",
            "size": 0.2
        },
        {
            "id": "species",
            "label": "species",
            "size": 0.2
        },
        {
            "id": "anti-aging",
            "label": "anti-aging",
            "size": 0.2
        },
        {
            "id": "reactive",
            "label": "reactive",
            "size": 0.2
        },
        {
            "id": "klotho",
            "label": "klotho",
            "size": 0.4
        },
        {
            "id": "prolongs",
            "label": "prolongs",
            "size": 0.1
        },
        {
            "id": "aerobics",
            "label": "aerobics",
            "size": 0.30000000000000004
        },
        {
            "id": "age-dependent",
            "label": "age-dependent",
            "size": 2.1000000000000005
        },
        {
            "id": "geroprotectors",
            "label": "geroprotectors",
            "size": 2.1000000000000005
        },
        {
            "id": "immortality",
            "label": "immortality",
            "size": 0.30000000000000004
        },
        {
            "id": "mutations",
            "label": "mutations",
            "size": 1.2
        },
        {
            "id": "diseases",
            "label": "diseases",
            "size": 2.1000000000000005
        },
        {
            "id": "chromatin",
            "label": "chromatin",
            "size": 0.4
        },
        {
            "id": "telomeres",
            "label": "telomeres",
            "size": 0.30000000000000004
        },
        {
            "id": "heterochromatin",
            "label": "heterochromatin",
            "size": 0.4
        },
        {
            "id": "telomere",
            "label": "telomere",
            "size": 0.7999999999999999
        },
        {
            "id": "histones",
            "label": "histones",
            "size": 0.1
        },
        {
            "id": "epigenetic",
            "label": "epigenetic",
            "size": 0.1
        },
        {
            "id": "histone",
            "label": "histone",
            "size": 0.1
        },
        {
            "id": "mtdna",
            "label": "mtdna",
            "size": 0.7999999999999999
        },
        {
            "id": "mrnas",
            "label": "mrnas",
            "size": 0.1
        },
        {
            "id": "ribosome",
            "label": "ribosome",
            "size": 0.1
        },
        {
            "id": "proteins",
            "label": "proteins",
            "size": 0.30000000000000004
        },
        {
            "id": "telomerase",
            "label": "telomerase",
            "size": 0.1
        },
        {
            "id": "neutrophilia",
            "label": "neutrophilia",
            "size": 0.1
        },
        {
            "id": "diverticula",
            "label": "diverticula",
            "size": 0.1
        },
        {
            "id": "intestinal",
            "label": "intestinal",
            "size": 0.1
        },
        {
            "id": "microbiota",
            "label": "microbiota",
            "size": 0.1
        },
        {
            "id": "sirtuins",
            "label": "sirtuins",
            "size": 1.3
        },
        {
            "id": "resveratrol",
            "label": "resveratrol",
            "size": 0.7
        },
        {
            "id": "sirt1",
            "label": "sirt1",
            "size": 0.8999999999999999
        },
        {
            "id": "veratrol",
            "label": "veratrol",
            "size": 0.6
        },
        {
            "id": "sirtuin",
            "label": "sirtuin",
            "size": 0.6
        },
        {
            "id": "Peptide Therapies and Pharmaceutical Innovations",
            "label": "Peptide Therapies and Pharmaceutical Innovations",
            "size": 0.2
        },
        {
            "id": "autophagy",
            "label": "autophagy",
            "size": 0.1
        },
        {
            "id": "phenformin",
            "label": "phenformin",
            "size": 0.1
        },
        {
            "id": "microrna",
            "label": "microrna",
            "size": 0.1
        },
        {
            "id": "metformin",
            "label": "metformin",
            "size": 0.1
        },
        {
            "id": "exercising",
            "label": "exercising",
            "size": 0.2
        },
        {
            "id": "dieting",
            "label": "dieting",
            "size": 0.2
        },
        {
            "id": "coronary",
            "label": "coronary",
            "size": 0.4
        },
        {
            "id": "systolic",
            "label": "systolic",
            "size": 0.1
        },
        {
            "id": "hypertensive",
            "label": "hypertensive",
            "size": 0.1
        },
        {
            "id": "cancers",
            "label": "cancers",
            "size": 0.2
        },
        {
            "id": "walking",
            "label": "walking",
            "size": 0.1
        },
        {
            "id": "activities",
            "label": "activities",
            "size": 0.1
        },
        {
            "id": "lifestyle",
            "label": "lifestyle",
            "size": 0.9999999999999999
        },
        {
            "id": "inhabitants",
            "label": "inhabitants",
            "size": 0.6
        },
        {
            "id": "ikaria",
            "label": "ikaria",
            "size": 0.6
        },
        {
            "id": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "label": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "size": 0.1
        },
        {
            "id": "elderly",
            "label": "elderly",
            "size": 0.6
        },
        {
            "id": "x02",
            "label": "x02",
            "size": 0.1
        },
        {
            "id": "lipidome",
            "label": "lipidome",
            "size": 0.1
        },
        {
            "id": "lipidomics",
            "label": "lipidomics",
            "size": 0.2
        },
        {
            "id": "lipids",
            "label": "lipids",
            "size": 0.2
        },
        {
            "id":"",
            "label":"",
            "size": 0.1
        },
        {
            "id": "age",
            "label": "age",
            "size": 0.7
        },
        {
            "id": "researchers",
            "label": "researchers",
            "size": 0.7
        },
        {
            "id": "Clinical Trials and Innovative Research",
            "label": "Clinical Trials and Innovative Research",
            "size": 0.1
        },
        {
            "id": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "label": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "size": 0.1
        },
        {
            "id": "methylation",
            "label": "methylation",
            "size": 0.4
        },
        {
            "id": "transgenic",
            "label": "transgenic",
            "size": 0.1
        },
        {
            "id": "degeneration",
            "label": "degeneration",
            "size": 0.1
        },
        {
            "id": "biomark",
            "label": "biomark",
            "size": 0.6
        },
        {
            "id": "proteome",
            "label": "proteome",
            "size": 0.2
        },
        {
            "id": "proteomics",
            "label": "proteomics",
            "size": 1.0999999999999999
        },
        {
            "id": "dehydroepinadrosterone",
            "label": "dehydroepinadrosterone",
            "size": 0.1
        },
        {
            "id": "diabetes",
            "label": "diabetes",
            "size": 0.7
        },
        {
            "id": "hyperlipidemia",
            "label": "hyperlipidemia",
            "size": 0.1
        },
        {
            "id": "accelerometers",
            "label": "accelerometers",
            "size": 0.1
        },
        {
            "id": "hispanic",
            "label": "hispanic",
            "size": 0.1
        },
        {
            "id": "american",
            "label": "american",
            "size": 0.1
        },
        {
            "id": "treadmill",
            "label": "treadmill",
            "size": 0.1
        },
        {
            "id": "deaths",
            "label": "deaths",
            "size": 0.2
        },
        {
            "id": "risks",
            "label": "risks",
            "size": 0.2
        },
        {
            "id": "disease",
            "label": "disease",
            "size": 0.30000000000000004
        },
        {
            "id": "social",
            "label": "social",
            "size": 0.30000000000000004
        },
        {
            "id": "medicine",
            "label": "medicine",
            "size": 0.30000000000000004
        },
        {
            "id": "heart",
            "label": "heart",
            "size": 0.4
        },
        {
            "id": "exertion",
            "label": "exertion",
            "size": 0.1
        },
        {
            "id": "exercisers",
            "label": "exercisers",
            "size": 0.2
        },
        {
            "id": "smoking",
            "label": "smoking",
            "size": 0.1
        },
        {
            "id": "cigarette",
            "label": "cigarette",
            "size": 0.1
        },
        {
            "id": "variability",
            "label": "variability",
            "size": 0.1
        },
        {
            "id": "autonomic",
            "label": "autonomic",
            "size": 0.1
        },
        {
            "id": "rate",
            "label": "rate",
            "size": 0.1
        },
        {
            "id": "homeothermic",
            "label": "homeothermic",
            "size": 0.1
        },
        {
            "id": "mortrtrtalality",
            "label": "mortrtrtalality",
            "size": 0.1
        },
        {
            "id": "physiologic",
            "label": "physiologic",
            "size": 0.1
        },
        {
            "id": "editorial",
            "label": "editorial",
            "size": 0.1
        },
        {
            "id": "poly(adp-ribose)",
            "label": "poly(adp-ribose)",
            "size": 0.7
        },
        {
            "id": "polymerases",
            "label": "polymerases",
            "size": 0.7
        },
        {
            "id": "nad",
            "label": "nad",
            "size": 0.5
        },
        {
            "id": "nad+",
            "label": "nad+",
            "size": 0.7
        },
        {
            "id": "nad+/nadh",
            "label": "nad+/nadh",
            "size": 0.7
        },
        {
            "id": "ratio",
            "label": "ratio",
            "size": 0.7
        },
        {
            "id": "nadph",
            "label": "nadph",
            "size": 0.30000000000000004
        },
        {
            "id": "p53",
            "label": "p53",
            "size": 0.1
        },
        {
            "id": "nicotinamide",
            "label": "nicotinamide",
            "size": 0.1
        },
        {
            "id": "sir2",
            "label": "sir2",
            "size": 0.2
        },
        {
            "id": "adipokines",
            "label": "adipokines",
            "size": 0.1
        },
        {
            "id": "●",
            "label": "●",
            "size": 0.1
        },
        {
            "id": "adipokine",
            "label": "adipokine",
            "size": 0.1
        },
        {
            "id": "▶",
            "label": "▶",
            "size": 0.1
        },
        {
            "id": "acids",
            "label": "acids",
            "size": 0.1
        },
        {
            "id": "fatty",
            "label": "fatty",
            "size": 0.1
        },
        {
            "id": "elegans",
            "label": "elegans",
            "size": 1.6000000000000003
        },
        {
            "id": "fasting-mimicking",
            "label": "fasting-mimicking",
            "size": 2.3000000000000007
        },
        {
            "id": "protein",
            "label": "protein",
            "size": 2.400000000000001
        },
        {
            "id": "intake",
            "label": "intake",
            "size": 2.3000000000000007
        },
        {
            "id": "source",
            "label": "source",
            "size": 2.3000000000000007
        },
        {
            "id": "healthspan",
            "label": "healthspan",
            "size": 2.3000000000000007
        },
        {
            "id": "meat",
            "label": "meat",
            "size": 0.1
        },
        {
            "id": "vegetarian",
            "label": "vegetarian",
            "size": 0.1
        },
        {
            "id": "peptide",
            "label": "peptide",
            "size": 0.1
        },
        {
            "id": "peptides",
            "label": "peptides",
            "size": 0.1
        },
        {
            "id": "neurodegenerative",
            "label": "neurodegenerative",
            "size": 0.30000000000000004
        },
        {
            "id": "evolved",
            "label": "evolved",
            "size": 0.30000000000000004
        },
        {
            "id": "evolution",
            "label": "evolution",
            "size": 0.2
        },
        {
            "id": "apoe",
            "label": "apoe",
            "size": 0.2
        },
        {
            "id": "chimpanzee",
            "label": "chimpanzee",
            "size": 0.2
        },
        {
            "id": "chimpanzees",
            "label": "chimpanzees",
            "size": 0.2
        },
        {
            "id": "lipid",
            "label": "lipid",
            "size": 0.1
        },
        {
            "id": "primates",
            "label": "primates",
            "size": 0.1
        },
        {
            "id": "erectus",
            "label": "erectus",
            "size": 0.1
        },
        {
            "id": "paleolithic",
            "label": "paleolithic",
            "size": 0.30000000000000004
        },
        {
            "id": "metabolomics",
            "label": "metabolomics",
            "size": 0.2
        },
        {
            "id": "biochemistry",
            "label": "biochemistry",
            "size": 0.2
        },
        {
            "id": "neuroproteomics",
            "label": "neuroproteomics",
            "size": 0.2
        },
        {
            "id": "neurodegeneration",
            "label": "neurodegeneration",
            "size": 0.30000000000000004
        },
        {
            "id": "glycolytic",
            "label": "glycolytic",
            "size": 0.30000000000000004
        },
        {
            "id": "glycolysis",
            "label": "glycolysis",
            "size": 0.30000000000000004
        },
        {
            "id": "schizophrenia",
            "label": "schizophrenia",
            "size": 0.30000000000000004
        },
        {
            "id": "gdp",
            "label": "gdp",
            "size": 0.1
        },
        {
            "id": "genetic",
            "label": "genetic",
            "size": 0.8999999999999999
        },
        {
            "id": "adipogenesis",
            "label": "adipogenesis",
            "size": 0.1
        },
        {
            "id": "jellyfish",
            "label": "jellyfish",
            "size": 0.2
        },
        {
            "id": "cytochrome",
            "label": "cytochrome",
            "size": 0.2
        },
        {
            "id": "oxidase",
            "label": "oxidase",
            "size": 0.2
        },
        {
            "id": "motivation",
            "label": "motivation",
            "size": 0.4
        },
        {
            "id": "motivational",
            "label": "motivational",
            "size": 0.30000000000000004
        },
        {
            "id": "entropy",
            "label": "entropy",
            "size": 0.2
        },
        {
            "id": "biothermodynamics",
            "label": "biothermodynamics",
            "size": 0.2
        },
        {
            "id": "generation",
            "label": "generation",
            "size": 0.2
        },
        {
            "id": "athletic",
            "label": "athletic",
            "size": 0.30000000000000004
        },
        {
            "id": "athletics",
            "label": "athletics",
            "size": 0.2
        },
        {
            "id": "cardiopulmonary",
            "label": "cardiopulmonary",
            "size": 0.1
        },
        {
            "id": "athlete",
            "label": "athlete",
            "size": 0.1
        },
        {
            "id": "athleticism",
            "label": "athleticism",
            "size": 0.1
        },
        {
            "id": "Altered Intercellular Communication",
            "label": "Altered Intercellular Communication",
            "size": 0.1
        },
        {
            "id": "Omics in Medicine:Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "label": "Omics in Medicine:Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "size": 0.1
        },
        {
            "id": "Anti-aging Pharmacology",
            "label": "Anti-aging Pharmacology",
            "size": 0.1
        },
        {
            "id": "Nutritional Interventions for Age-related Diseases and Cellular Repair",
            "label": "Nutritional Interventions for Age-related Diseases and Cellular Repair",
            "size": 0.1
        },
        {
            "id": "Mind-Body Approaches (Meditation, Yoga)",
            "label": "Mind-Body Approaches (Meditation, Yoga)",
            "size": 0.1
        },
        {
            "id": "Rest and Sleep ",
            "label": "Rest and Sleep ",
            "size": 0.1
        },
        {
            "id": "Regenerative and Restorative Therapies",
            "label": "Regenerative and Restorative Therapies",
            "size": 0.1
        },
        {
            "id": "Regenerative Medicine (Stem Cell Therapy, Tissue Engineering)",
            "label": "Regenerative Medicine (Stem Cell Therapy, Tissue Engineering)",
            "size": 0.1
        },
        {
            "id": "Bioprinting and Tissue Engineering for Regenerative Medicine",
            "label": "Bioprinting and Tissue Engineering for Regenerative Medicine",
            "size": 0.1
        },
        {
            "id": "Mental Health, Cognitive Fitness, and Brain Health Training",
            "label": "Mental Health, Cognitive Fitness, and Brain Health Training",
            "size": 0.1
        },
        {
            "id": "Vaccination Strategies and Epidemiology for the Elderly",
            "label": "Vaccination Strategies and Epidemiology for the Elderly",
            "size": 0.1
        },
        {
            "id": "Evidence-Based Practices and Guidelines for Preventive Health Care",
            "label": "Evidence-Based Practices and Guidelines for Preventive Health Care",
            "size": 0.1
        },
        {
            "id": "Public Health Measures and Screening",
            "label": "Public Health Measures and Screening",
            "size": 0.1
        },
        {
            "id": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well-being",
            "label": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well-being",
            "size": 0.1
        },
        {
            "id": "Phase I-IV Trials of Age-related Treatments",
            "label": "Phase I-IV Trials of Age-related Treatments",
            "size": 0.1
        },
        {
            "id": "Omics Technologies:Application of Omics Data in Clinical Trial Design and Personalized Medicine",
            "label": "Omics Technologies:Application of Omics Data in Clinical Trial Design and Personalized Medicine",
            "size": 0.1
        },
        {
            "id": "Integrating cutting-edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "label": "Integrating cutting-edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "size": 0.1
        },
        {
            "id": "The impact of biomarker discovery on diagnosis, treatment, and preventative care.",
            "label": "The impact of biomarker discovery on diagnosis, treatment, and preventative care.",
            "size": 0.1
        },
        {
            "id": "Personalized medicine in the context of aging: Utilizing genetic, proteomic, and metabolomic insights to tailor interventions.",
            "label": "Personalized medicine in the context of aging: Utilizing genetic, proteomic, and metabolomic insights to tailor interventions.",
            "size": 0.1
        },
        {
            "id": "Health Policy and Elderly Care",
            "label": "Health Policy and Elderly Care",
            "size": 0.1
        },
        {
            "id": "Policy Evaluations and Models of Care for the Elderly",
            "label": "Policy Evaluations and Models of Care for the Elderly",
            "size": 0.1
        },
        {
            "id": "Geriatric Workforce Challenges and Economic Analyses",
            "label": "Geriatric Workforce Challenges and Economic Analyses",
            "size": 0.1
        },
        {
            "id": "Ethical and Educational Aspects",
            "label": "Ethical and Educational Aspects",
            "size": 0.1
        },
        {
            "id": "Ethics of Life Extension and Public Education on Aging",
            "label": "Ethics of Life Extension and Public Education on Aging",
            "size": 0.1
        },
        {
            "id": "Gender Dimension and Public Perceptions of Anti-aging Technologies",
            "label": "Gender Dimension and Public Perceptions of Anti-aging Technologies",
            "size": 0.1
        },
        {
            "id": "Wearable Devices and Health Monitoring Technologies",
            "label": "Wearable Devices and Health Monitoring Technologies",
            "size": 0.1
        },
        {
            "id": "Future Prospects and Emerging Approaches",
            "label": "Future Prospects and Emerging Approaches",
            "size": 0.1
        },
        {
            "id": "Senolytic Therapies and Cellular Reprogramming",
            "label": "Senolytic Therapies and Cellular Reprogramming",
            "size": 0.1
        },
        {
            "id": "Educational and Promotional Tools for Longevity Practices",
            "label": "Educational and Promotional Tools for Longevity Practices",
            "size": 0.1
        }
    ],
    "edges": [
        {
            "source": "heartbeat",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "heartbeat",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "fluctuation",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "fluctuation",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "physiological",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "physiological",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "fractal",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "fractal",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "detrended",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "detrended",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "analysis",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "analysis",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.5
        },
        {
            "source": "aerobic",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "heartbeat",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "heartbeat",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "fluctuation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "fluctuation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "physiological",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "physiological",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "fractal",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "fractal",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "detrended",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "detrended",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 3.3000000000000016
        },
        {
            "source": "exercise",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 3.2000000000000015
        },
        {
            "source": "analysis",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "analysis",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.9000000000000006
        },
        {
            "source": "aerobic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1.7000000000000004
        },
        {
            "source": "older",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "older",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 4.5
        },
        {
            "source": "aging",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 2.9000000000000012
        },
        {
            "source": "physical",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.3
        },
        {
            "source": "physical",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1.3
        },
        {
            "source": "sport",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "sport",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 4.5
        },
        {
            "source": "longevity",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 2.9000000000000012
        },
        {
            "source": "sustained",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "sustained",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "adults",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "adults",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "activity",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.2
        },
        {
            "source": "activity",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1.2
        },
        {
            "source": "ageing",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.7
        },
        {
            "source": "ageing",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "vigorous",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "vigorous",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "expectancy",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "expectancy",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "exhort",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "exhort",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "mortality",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 2.1000000000000005
        },
        {
            "source": "mortality",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 2.0000000000000004
        },
        {
            "source": "doses",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "doses",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "creatine",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "creatine",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "atp",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "atp",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "metabolic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 2.2000000000000006
        },
        {
            "source": "metabolic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1.3
        },
        {
            "source": "metabolism",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 2.2000000000000006
        },
        {
            "source": "metabolism",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.8999999999999999
        },
        {
            "source": "phosphorylation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "phosphorylation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.7
        },
        {
            "source": "mitochondrial",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "atp",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "atp",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.9999999999999999
        },
        {
            "source": "mitochondria",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "mitdna",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "mitdna",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "phosphorylation",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "phosphorylation",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "mitochondrial",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "cardiovascular",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.2
        },
        {
            "source": "cardiovascular",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1.2
        },
        {
            "source": "circadian",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "circadian",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "endurance",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.5
        },
        {
            "source": "endurance",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.5
        },
        {
            "source": "drosophila",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "drosophila",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "endurance",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "endurance",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.8999999999999999
        },
        {
            "source": "aging",
            "target": "Environmental Exposures and Aging",
            "weight": 0.8999999999999999
        },
        {
            "source": "drosophila",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "drosophila",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "health",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 2.3000000000000007
        },
        {
            "source": "health",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 2.0000000000000004
        },
        {
            "source": "epidemiology",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.7
        },
        {
            "source": "epidemiology",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.7
        },
        {
            "source": "leisure",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "leisure",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "diet",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 4.799999999999999
        },
        {
            "source": "diet",
            "target": "Nutritional Interventions for Age",
            "weight": 1.2
        },
        {
            "source": "diet",
            "target": "related Diseases and Cellular Repair",
            "weight": 1.2
        },
        {
            "source": "regeneration",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "regeneration",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "regeneration",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "prolonged",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.7
        },
        {
            "source": "prolonged",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "prolonged",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "feeding",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "feeding",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "feeding",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "fasting",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.2
        },
        {
            "source": "fasting",
            "target": "Nutritional Interventions for Age",
            "weight": 0.30000000000000004
        },
        {
            "source": "fasting",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.30000000000000004
        },
        {
            "source": "diet",
            "target": "Microbiome and Longevity",
            "weight": 0.7999999999999999
        },
        {
            "source": "regeneration",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "prolonged",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "feeding",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "fasting",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 1.0999999999999999
        },
        {
            "source": "regeneration",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "prolonged",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "feeding",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "fasting",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.30000000000000004
        },
        {
            "source": "diet",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1.4000000000000001
        },
        {
            "source": "regeneration",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "prolonged",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "feeding",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "fasting",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "diet",
            "target": "Healthy Aging",
            "weight": 1.4000000000000001
        },
        {
            "source": "diet",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.5
        },
        {
            "source": "diet",
            "target": "being",
            "weight": 0.5
        },
        {
            "source": "regeneration",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "regeneration",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "regeneration",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "prolonged",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "prolonged",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "prolonged",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "feeding",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "feeding",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "feeding",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "fasting",
            "target": "Healthy Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "fasting",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "fasting",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Nutritional Interventions for Age",
            "weight": 0.7
        },
        {
            "source": "aging",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.7
        },
        {
            "source": "dietary",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 2.800000000000001
        },
        {
            "source": "dietary",
            "target": "Nutritional Interventions for Age",
            "weight": 0.6
        },
        {
            "source": "dietary",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.6
        },
        {
            "source": "metabolic",
            "target": "Nutritional Interventions for Age",
            "weight": 0.4
        },
        {
            "source": "metabolic",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.4
        },
        {
            "source": "metabolism",
            "target": "Nutritional Interventions for Age",
            "weight": 0.5
        },
        {
            "source": "metabolism",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.5
        },
        {
            "source": "aging",
            "target": "Microbiome and Longevity",
            "weight": 0.5
        },
        {
            "source": "dietary",
            "target": "Microbiome and Longevity",
            "weight": 0.5
        },
        {
            "source": "metabolic",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Microbiome and Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "aging",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.4
        },
        {
            "source": "dietary",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.5
        },
        {
            "source": "metabolic",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.30000000000000004
        },
        {
            "source": "metabolism",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.30000000000000004
        },
        {
            "source": "dietary",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.8999999999999999
        },
        {
            "source": "diet",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.7
        },
        {
            "source": "aging",
            "target": "Healthy Aging",
            "weight": 2.0000000000000004
        },
        {
            "source": "aging",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 1.5000000000000002
        },
        {
            "source": "dietary",
            "target": "Healthy Aging",
            "weight": 1.0999999999999999
        },
        {
            "source": "dietary",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.5
        },
        {
            "source": "metabolic",
            "target": "Healthy Aging",
            "weight": 0.5
        },
        {
            "source": "metabolic",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "metabolism",
            "target": "Healthy Aging",
            "weight": 1.2
        },
        {
            "source": "metabolism",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.7
        },
        {
            "source": "diet",
            "target": "Case Reports on Longevity",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Case Reports on Longevity",
            "weight": 0.4
        },
        {
            "source": "aging",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "Case Reports on Longevity",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.1
        },
        {
            "source": "metabolic",
            "target": "Case Reports on Longevity",
            "weight": 0.2
        },
        {
            "source": "metabolic",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Case Reports on Longevity",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.1
        },
        {
            "source": "metabolic",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6
        },
        {
            "source": "prolonging",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "prolong",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "prolong",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 2.600000000000001
        },
        {
            "source": "lifespan",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1.5000000000000002
        },
        {
            "source": "apoptosis",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "apoptosis",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Principles and Mechanisms of Aging",
            "weight": 4.4
        },
        {
            "source": "aging",
            "target": "Cellular Senescence and Aging",
            "weight": 0.7
        },
        {
            "source": "mutation",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.6
        },
        {
            "source": "mutation",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "nucleotide",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "nucleotide",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "dna",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "apoptosis",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.5
        },
        {
            "source": "mutation",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "nucleotide",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "apoptosis",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Genomic Instability and Aging",
            "weight": 1.4000000000000001
        },
        {
            "source": "mutation",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "nucleotide",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "apoptosis",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "apoptosis",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.8999999999999999
        },
        {
            "source": "aging",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "mutation",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "mutation",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "nucleotide",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "nucleotide",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "apoptosis",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "apoptosis",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 3.5000000000000018
        },
        {
            "source": "aging",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.7999999999999999
        },
        {
            "source": "mutation",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "mutation",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "nucleotide",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "nucleotide",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "dna",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "apoptosis",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "apoptosis",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Geroscience",
            "weight": 1.0999999999999999
        },
        {
            "source": "aging",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.6
        },
        {
            "source": "mutation",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "mutation",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "nucleotide",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "nucleotide",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "apoptosis",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "apoptosis",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "mutation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "mutation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "nucleotide",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "nucleotide",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.5
        },
        {
            "source": "prolonging",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.5
        },
        {
            "source": "ercc1",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.5
        },
        {
            "source": "aerobic",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.9999999999999999
        },
        {
            "source": "lifespan",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Epigenetic Regulation of Aging",
            "weight": 1.0999999999999999
        },
        {
            "source": "prolonging",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "aging",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.5
        },
        {
            "source": "prolonging",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Genomic Instability and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "aging",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.7
        },
        {
            "source": "prolonging",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.5
        },
        {
            "source": "lifespan",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.5
        },
        {
            "source": "prolonging",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "prolonging",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "ercc1",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.6000000000000003
        },
        {
            "source": "lifespan",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "aging",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.5
        },
        {
            "source": "prolonging",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.30000000000000004
        },
        {
            "source": "aging",
            "target": "Biomarker Discovery",
            "weight": 0.9999999999999999
        },
        {
            "source": "prolonging",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "aging",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.9999999999999999
        },
        {
            "source": "prolonging",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.4
        },
        {
            "source": "aging",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.30000000000000004
        },
        {
            "source": "prolonging",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Geroscience",
            "weight": 0.7
        },
        {
            "source": "lifespan",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.4
        },
        {
            "source": "aging",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 1.2
        },
        {
            "source": "aging",
            "target": "Anti",
            "weight": 0.6
        },
        {
            "source": "aging",
            "target": "aging Pharmacology",
            "weight": 0.6
        },
        {
            "source": "prolonging",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6
        },
        {
            "source": "lifespan",
            "target": "Anti",
            "weight": 0.4
        },
        {
            "source": "lifespan",
            "target": "aging Pharmacology",
            "weight": 0.4
        },
        {
            "source": "prolonging",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "ercc1",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Nutritional Interventions for Age",
            "weight": 0.30000000000000004
        },
        {
            "source": "lifespan",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.30000000000000004
        },
        {
            "source": "prolonging",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Microbiome and Longevity",
            "weight": 0.5
        },
        {
            "source": "ercc1",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.4
        },
        {
            "source": "lifespan",
            "target": "Environmental Exposures and Aging",
            "weight": 0.4
        },
        {
            "source": "prolonging",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Healthy Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "aerobic",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Healthy Aging",
            "weight": 0.9999999999999999
        },
        {
            "source": "lifespan",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.8999999999999999
        },
        {
            "source": "aging",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.5
        },
        {
            "source": "aging",
            "target": "being",
            "weight": 0.5
        },
        {
            "source": "prolonging",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Case Reports on Longevity",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Case Reports on Longevity",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Case Reports on Longevity",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Case Reports on Longevity",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Clinical Implications",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Integrating cutting",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Clinical Implications",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Integrating cutting",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Clinical Implications",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Integrating cutting",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Clinical Implications",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Integrating cutting",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Clinical Implications",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Integrating cutting",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Technological Advancements in Longevity",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Technological Advancements in Longevity",
            "weight": 0.1
        },
        {
            "source": "prolonging",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Technological Advancements in Longevity",
            "weight": 0.1
        },
        {
            "source": "ercc1",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Technological Advancements in Longevity",
            "weight": 0.1
        },
        {
            "source": "aerobic",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Technological Advancements in Longevity",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.2
        },
        {
            "source": "enzymes",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "enzymes",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "antioxidant",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "antioxidant",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "antioxidants",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "antioxidants",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "ros",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "ros",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "scavenger",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "scavenger",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "oxidative",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "oxidative",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "radicals",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "radicals",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "health",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "health",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "free",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "free",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "enzymes",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "enzymes",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "antioxidant",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "antioxidant",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "antioxidants",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "antioxidants",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "antioxidantactivity",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "antioxidantactivity",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "scavenger",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "scavenger",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "oxidative",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "radicals",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "radicals",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "free",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "free",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "supplementation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "supplementation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "antioxidantstatus",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "antioxidantstatus",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "enzymes",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "enzymes",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "antioxidant",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "antioxidant",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "antioxidants",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "antioxidants",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "scavenger",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "scavenger",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "oxidative",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "oxidative",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "Physical and Cognitive Activities",
            "weight": 0.30000000000000004
        },
        {
            "source": "exercise",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.30000000000000004
        },
        {
            "source": "radicals",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "radicals",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "health",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "health",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "free",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "free",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "supplementation",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "supplementation",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "antioxidantstatus",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "antioxidantstatus",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "supplements",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "supplements",
            "target": "Mind",
            "weight": 0.1
        },
        {
            "source": "supplements",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Mind",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.1
        },
        {
            "source": "health",
            "target": "Mind",
            "weight": 0.1
        },
        {
            "source": "health",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.1
        },
        {
            "source": "supplementation",
            "target": "Mind",
            "weight": 0.1
        },
        {
            "source": "supplementation",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.1
        },
        {
            "source": "wellness",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "wellness",
            "target": "Mind",
            "weight": 0.1
        },
        {
            "source": "wellness",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.1
        },
        {
            "source": "supplements",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "wellness",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "supplements",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "supplements",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Healthy Aging",
            "weight": 2.2000000000000006
        },
        {
            "source": "longevity",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 1.5000000000000002
        },
        {
            "source": "health",
            "target": "Healthy Aging",
            "weight": 0.5
        },
        {
            "source": "health",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "supplementation",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "supplementation",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "wellness",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "wellness",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "cholesterol",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "cholesterol",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "cholesterol",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "psyllium",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "psyllium",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "psyllium",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "triglycerides",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "triglycerides",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "triglycerides",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "cholesterol",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "psyllium",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "triglycerides",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Mind",
            "weight": 0.30000000000000004
        },
        {
            "source": "diet",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.30000000000000004
        },
        {
            "source": "cholesterol",
            "target": "Mind",
            "weight": 0.1
        },
        {
            "source": "cholesterol",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.1
        },
        {
            "source": "dietary",
            "target": "Mind",
            "weight": 0.30000000000000004
        },
        {
            "source": "dietary",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.30000000000000004
        },
        {
            "source": "psyllium",
            "target": "Mind",
            "weight": 0.1
        },
        {
            "source": "psyllium",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.1
        },
        {
            "source": "triglycerides",
            "target": "Mind",
            "weight": 0.1
        },
        {
            "source": "triglycerides",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.1
        },
        {
            "source": "cholesterol",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "psyllium",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "triglycerides",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "cholesterol",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "cholesterol",
            "target": "Evidence",
            "weight": 0.1
        },
        {
            "source": "cholesterol",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.1
        },
        {
            "source": "dietary",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "psyllium",
            "target": "Evidence",
            "weight": 0.1
        },
        {
            "source": "psyllium",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.1
        },
        {
            "source": "triglycerides",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "triglycerides",
            "target": "Evidence",
            "weight": 0.1
        },
        {
            "source": "triglycerides",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.1
        },
        {
            "source": "cholesterol",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "cholesterol",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "cholesterol",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "dietary",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.4
        },
        {
            "source": "dietary",
            "target": "being",
            "weight": 0.4
        },
        {
            "source": "psyllium",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "psyllium",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "psyllium",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "triglycerides",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "triglycerides",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "triglycerides",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "hypertension",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "hypertension",
            "target": "Evidence",
            "weight": 0.1
        },
        {
            "source": "hypertension",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.1
        },
        {
            "source": "cardiac",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "cardiac",
            "target": "Evidence",
            "weight": 0.1
        },
        {
            "source": "cardiac",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.1
        },
        {
            "source": "meditation",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "meditation",
            "target": "Evidence",
            "weight": 0.1
        },
        {
            "source": "meditation",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.1
        },
        {
            "source": "biofeedback",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "biofeedback",
            "target": "Evidence",
            "weight": 0.1
        },
        {
            "source": "biofeedback",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.1
        },
        {
            "source": "health",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "health",
            "target": "Evidence",
            "weight": 0.1
        },
        {
            "source": "health",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.1
        },
        {
            "source": "kinase",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "kinase",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "hallmarks",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "hallmarks",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "yeast",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "yeast",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "proteomic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "proteomic",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "kinase",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "hallmarks",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "yeast",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "Genomic Instability and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "proteomic",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "rnas",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "rnas",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "rna",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "rna",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "mrna",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "mrna",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "rnas",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "rnas",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "rna",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "rna",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "hallmarks",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "hallmarks",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "mrna",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "mrna",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "hallmarks",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.5
        },
        {
            "source": "metabolism",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "hallmarks",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "metabolism",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.4
        },
        {
            "source": "alzheimer",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "hallmarks",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "hallmarks",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "alzheimer",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "hallmarks",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "hallmarks",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "hallmarks",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "vitamin",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "vitamin",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "Healthy Aging",
            "weight": 0.7
        },
        {
            "source": "exercise",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "interventions",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "interventions",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "omega-3",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "omega-3",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "healthy",
            "target": "Healthy Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "healthy",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "fitness",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.8000000000000005
        },
        {
            "source": "fitness",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1.8000000000000005
        },
        {
            "source": "fitness9",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "fitness9",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "degenerative",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "degenerative",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "lifesaving",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "lifesaving",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 0.1
        },
        {
            "source": "screening",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "screening",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 0.1
        },
        {
            "source": "mammography",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "mammography",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 0.1
        },
        {
            "source": "overdiagnosis",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "overdiagnosis",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 0.1
        },
        {
            "source": "mammographic",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "mammographic",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 0.1
        },
        {
            "source": "chronic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "chronic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "conceptofexerciseismedicine",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "conceptofexerciseismedicine",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "rna-seq",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8999999999999999
        },
        {
            "source": "rna-seq",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "transcriptomics",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.9999999999999999
        },
        {
            "source": "transcriptomics",
            "target": "Cellular Senescence and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "senescence",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8999999999999999
        },
        {
            "source": "senescence",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "lifetime",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "lifetime",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "proliferate",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "proliferate",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "inflammaging",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8999999999999999
        },
        {
            "source": "inflammaging",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "inflammation",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8999999999999999
        },
        {
            "source": "inflammation",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "rna-seq",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "transcriptomics",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "senescence",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "lifetime",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "proliferate",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "inflammaging",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "inflammation",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "rna-seq",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "transcriptomics",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "senescence",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "lifetime",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "proliferate",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "inflammaging",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "inflammation",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "rna-seq",
            "target": "Genomic Instability and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "transcriptomics",
            "target": "Genomic Instability and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "senescence",
            "target": "Genomic Instability and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "lifetime",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "proliferate",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "inflammaging",
            "target": "Genomic Instability and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "inflammation",
            "target": "Genomic Instability and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "rna-seq",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "rna-seq",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "transcriptomics",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "transcriptomics",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "senescence",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "senescence",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "lifetime",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "lifetime",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "proliferate",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "proliferate",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "inflammaging",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "inflammaging",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "inflammation",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "inflammation",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "aged",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "transcriptomic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "transcriptomic",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "transcriptomic",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "transcriptomic",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "transcriptomic",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "transcriptomic",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "mitochondria",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "genes",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.6
        },
        {
            "source": "genes",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "ageing",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "old",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "old",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "rna-seq",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "rna-seq",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "transcriptomics",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "transcriptomics",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "senescence",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "senescence",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "genes",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.7999999999999999
        },
        {
            "source": "genes",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.30000000000000004
        },
        {
            "source": "inflammaging",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "inflammaging",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.3
        },
        {
            "source": "ageing",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.4
        },
        {
            "source": "old",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "old",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "rna-seq",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "rna-seq",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "epidermal",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "epidermal",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "transcriptomics",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "transcriptomics",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "senescence",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "senescence",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "skin",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "skin",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "inflammaging",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "inflammaging",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.1
        },
        {
            "source": "macrophages",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "macrophages",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "inflammatory",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "inflammatory",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "macrophage",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "macrophage",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "interstitial",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.7999999999999999
        },
        {
            "source": "interstitial",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "growth",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.7999999999999999
        },
        {
            "source": "growth",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "biomarker",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.7000000000000004
        },
        {
            "source": "biomarker",
            "target": "Biomarker Discovery",
            "weight": 0.7
        },
        {
            "source": "tumor",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.7999999999999999
        },
        {
            "source": "tumor",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "factor",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.7999999999999999
        },
        {
            "source": "factor",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "15",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.7999999999999999
        },
        {
            "source": "15",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "biomarkers",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.6000000000000003
        },
        {
            "source": "biomarkers",
            "target": "Biomarker Discovery",
            "weight": 0.7999999999999999
        },
        {
            "source": "abnormality",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.7999999999999999
        },
        {
            "source": "abnormality",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "lung",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.7999999999999999
        },
        {
            "source": "lung",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "differentiation",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.7999999999999999
        },
        {
            "source": "differentiation",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "fibrosis",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.7
        },
        {
            "source": "fibrosis",
            "target": "Biomarker Discovery",
            "weight": 0.30000000000000004
        },
        {
            "source": "interstitial",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "interstitial",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "growth",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "growth",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "Geroscience",
            "weight": 0.30000000000000004
        },
        {
            "source": "biomarker",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "tumor",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "tumor",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "factor",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "15",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "15",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "biomarkers",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "abnormality",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "abnormality",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "lung",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "lung",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "differentiation",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "fibrosis",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "fibrosis",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "interstitial",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "growth",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "tumor",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "15",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "abnormality",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "lung",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "differentiation",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "fibrosis",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "interstitial",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "pulmonary",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "pulmonary",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "growth",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "tumor",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "15",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "abnormality",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "lung",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "bronchiectasis",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "bronchiectasis",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "fibrosis",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "pulmonary",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "bronchiectasis",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "interstitial",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "interstitial",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "pulmonary",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "pulmonary",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "growth",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "growth",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "tumor",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "tumor",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "factor",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "factor",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "15",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "15",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "abnormality",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "abnormality",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "lung",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "lung",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "differentiation",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "differentiation",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "bronchiectasis",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "bronchiectasis",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "fibrosis",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "fibrosis",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "cytokine",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.5
        },
        {
            "source": "cytokine",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "copdgene",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "copdgene",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "interstitial",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "interstitial",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "growth",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "growth",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "tumor",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "tumor",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "cytokine",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "cytokine",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "gdf15",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "gdf15",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "factor",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "factor",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "15",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "15",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "abnormality",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "abnormality",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "lung",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "lung",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "differentiation",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "differentiation",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "tgf",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "tgf",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "fibrosis",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "fibrosis",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "interstitial",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "growth",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "tumor",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "cytokine",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "gdf15",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "factor",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "15",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "abnormality",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "lung",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "differentiation",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "tgf",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "fibrosis",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "interstitial",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "growth",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "tumor",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "cytokine",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "gdf15",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "factor",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "15",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "abnormality",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "lung",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "differentiation",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "tgf",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "fibrosis",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "interstitial",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "growth",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "tumor",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "cytokine",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "gdf15",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "factor",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "15",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "abnormality",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "lung",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "differentiation",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "tgf",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "fibrosis",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "cytokine",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "gdf15",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "gdf15",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "tgf",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "tgf",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "interstitial",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "growth",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "tumor",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "cytokine",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "gdf15",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "factor",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "15",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "abnormality",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "lung",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "differentiation",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "tgf",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "fibrosis",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "gdf15",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "tgf",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "interstitial",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "growth",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "tumor",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "cytokine",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "gdf15",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "factor",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "15",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "abnormality",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "lung",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "differentiation",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "tgf",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "fibrosis",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "exercise—aging",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "exercise—aging",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "fatigue",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "fatigue",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "aerobically",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "aerobically",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "muscular",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "muscular",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "strength",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "strength",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "rehabilitation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "rehabilitation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "muscle",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "muscle",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "occupational",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "occupational",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "jogging",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "jogging",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "fitness",
            "target": "Healthy Aging",
            "weight": 0.6
        },
        {
            "source": "fitness",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "jogging",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "jogging",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "sedentary",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "sedentary",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "mortality",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Microbiome and Longevity",
            "weight": 0.7999999999999999
        },
        {
            "source": "exercise",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "cardio",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "cardio",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "sedentary",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "cardio",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "sedentary",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "sedentary",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "mortality",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "mortality",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "cardio",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "cardio",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "sedentary",
            "target": "Healthy Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "sedentary",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "mortality",
            "target": "Healthy Aging",
            "weight": 0.5
        },
        {
            "source": "mortality",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "cardio",
            "target": "Healthy Aging",
            "weight": 0.5
        },
        {
            "source": "cardio",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "sedentary",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "sedentary",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "mortality",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "mortality",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.6
        },
        {
            "source": "longevity",
            "target": "being",
            "weight": 0.6
        },
        {
            "source": "exercise",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "cardio",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "cardio",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "sedentary",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.1
        },
        {
            "source": "mortality",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.1
        },
        {
            "source": "cardio",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.1
        },
        {
            "source": "sedentary",
            "target": "Clinical Implications",
            "weight": 0.1
        },
        {
            "source": "sedentary",
            "target": "Integrating cutting",
            "weight": 0.1
        },
        {
            "source": "sedentary",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.1
        },
        {
            "source": "mortality",
            "target": "Clinical Implications",
            "weight": 0.1
        },
        {
            "source": "mortality",
            "target": "Integrating cutting",
            "weight": 0.1
        },
        {
            "source": "mortality",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Clinical Implications",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Integrating cutting",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "Clinical Implications",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "Integrating cutting",
            "weight": 0.1
        },
        {
            "source": "exercise",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.1
        },
        {
            "source": "cardio",
            "target": "Clinical Implications",
            "weight": 0.1
        },
        {
            "source": "cardio",
            "target": "Integrating cutting",
            "weight": 0.1
        },
        {
            "source": "cardio",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.1
        },
        {
            "source": "bmi",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "bmi",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "neuropsychology",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "neuropsychology",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "consumption",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "consumption",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "nutritionally",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "nutritionally",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "nutritional",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "nutritional",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "diets",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 2.1000000000000005
        },
        {
            "source": "diets",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.7
        },
        {
            "source": "food4healthylife",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "food4healthylife",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "food4healthylife",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "nutrigrade",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "nutrigrade",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "nutrigrade",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "diets",
            "target": "Nutritional Interventions for Age",
            "weight": 0.5
        },
        {
            "source": "diets",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.5
        },
        {
            "source": "vegetables",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "vegetables",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "vegetables",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "food4healthylife",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "nutrigrade",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "diets",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.5
        },
        {
            "source": "vegetables",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "food4healthylife",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "nutrigrade",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "vegetables",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "stress",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "stress",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "erythrocyte",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "erythrocyte",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "erythrocytes",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "erythrocytes",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "life",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "life",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "span",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "span",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "glutathione",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "glutathione",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "obesity",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "obesity",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "runners",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "runners",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "endurance",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "endurance",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "nutritional",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "nutritional",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "endurance",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "endurance",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "metabolic",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "metabolic",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "nutritional",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "nutritional",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "adipose",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "adipose",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "calorie",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6
        },
        {
            "source": "calorie",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "adiposity",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "adiposity",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "calorie",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "vegan",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "vegan",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.7
        },
        {
            "source": "igf",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "igfbp",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "igfbp",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "calorie",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "vegan",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "igfbp",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "vegan",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "igfbp",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "neurogenesis",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "neurogenesis",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "carcinogenesis",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "carcinogenesis",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "carcinogenesis",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "carcinogenesis",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "system",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "system",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "mimetic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "mimetic",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "innate",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "innate",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "intermittent",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "intermittent",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "macrophages",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "macrophages",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "metabolome",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "metabolome",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "prolonged",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "prolonged",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "metabolomic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "metabolomic",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "immune",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "immune",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.9000000000000006
        },
        {
            "source": "longevity",
            "target": "Biomarker Discovery",
            "weight": 0.7
        },
        {
            "source": "anti-inﬂammatory",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "anti-inﬂammatory",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "immunology",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "immunology",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "metabolic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "metabolic",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "fasting",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "fasting",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "system",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "system",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "mimetic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "mimetic",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "innate",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "innate",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "intermittent",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "intermittent",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "macrophages",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "macrophages",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "metabolome",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "metabolome",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "metabolomic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "metabolomic",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "immune",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "immune",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "anti-inﬂammatory",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "anti-inﬂammatory",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "immunology",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "immunology",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "system",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "mimetic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "nutrition",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "nutrition",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "innate",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "homeostasis",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "homeostasis",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "intermittent",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "immune",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "anti-inﬂammatory",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "immunology",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "genetics",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "genetics",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "calorie",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "calorie",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "nutrient",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "nutrient",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "genes",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.30000000000000004
        },
        {
            "source": "nutrients",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "nutrients",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "human",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "human",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "restriction",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "restriction",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "genetics",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "calorie",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "nutrient",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.5
        },
        {
            "source": "nutrients",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "human",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "restriction",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "fasting",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "longevity19",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "longevity19",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "macronutrient",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "diet",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "dietary",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "diets",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "diets",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "macronutrient",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.9999999999999999
        },
        {
            "source": "macronutrient",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Mind",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Mind",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "Mind",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Healthy Aging",
            "weight": 0.6
        },
        {
            "source": "macronutrient",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "Healthy Aging",
            "weight": 0.6
        },
        {
            "source": "diets",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.30000000000000004
        },
        {
            "source": "metabolism",
            "target": "being",
            "weight": 0.30000000000000004
        },
        {
            "source": "diets",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.2
        },
        {
            "source": "obese",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6
        },
        {
            "source": "obese",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "obese",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "obese",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "obese",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.5
        },
        {
            "source": "longevity",
            "target": "Anti",
            "weight": 0.30000000000000004
        },
        {
            "source": "longevity",
            "target": "aging Pharmacology",
            "weight": 0.30000000000000004
        },
        {
            "source": "lifespan89",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "lifespan89",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "lifespan89",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "macronutrient",
            "target": "Evidence",
            "weight": 0.1
        },
        {
            "source": "macronutrient",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Evidence",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.1
        },
        {
            "source": "diets",
            "target": "Preventive Medicine",
            "weight": 0.1
        },
        {
            "source": "diets",
            "target": "Evidence",
            "weight": 0.1
        },
        {
            "source": "diets",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.1
        },
        {
            "source": "calorie",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "calorie",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "insulin",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "insulin",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "insulin",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "glycemic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "glycemic",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "glycemic",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "restriction",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "restriction",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "restriction",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "insulin",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "glycemic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "restriction",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "calorie",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "calorie",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "insulin",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "insulin",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "glycemic",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "glycemic",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "restriction",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "restriction",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "athletes",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "athletes",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "sports",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "sports",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "oxygen",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "oxygen",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "rat",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "rat",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "species",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "species",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "anti-aging",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "anti-aging",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "reactive",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "reactive",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "klotho",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "klotho",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "prolongs",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "prolongs",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "aerobics",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "aerobics",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "age-dependent",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.2
        },
        {
            "source": "age-dependent",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.3
        },
        {
            "source": "biomarkers",
            "target": "Cellular Senescence and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "geroprotectors",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.2
        },
        {
            "source": "geroprotectors",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "genes",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "immortality",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "immortality",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "mutations",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.7999999999999999
        },
        {
            "source": "mutations",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.2
        },
        {
            "source": "diseases",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "genes",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "immortality",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "mutations",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "Genomic Instability and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "biomarkers",
            "target": "Genomic Instability and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "geroprotectors",
            "target": "Genomic Instability and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "genes",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "immortality",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "mutations",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Genomic Instability and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "chromatin",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "chromatin",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "telomeres",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "telomeres",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "heterochromatin",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "heterochromatin",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "telomere",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "telomere",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "biomarkers",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "chromatin",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "telomeres",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "heterochromatin",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "telomere",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "chromatin",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "telomeres",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "heterochromatin",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "telomere",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "histones",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "histones",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "epigenetic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "epigenetic",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "histone",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "histone",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "mtdna",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "mtdna",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "mtdna",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "mutations",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "mtdna",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "mtdna",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "mtdna",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "mitochondrial",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "mutations",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "mutations",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "mrnas",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "mrnas",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "ribosome",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "ribosome",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "proteins",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "proteins",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.4
        },
        {
            "source": "telomerase",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "telomerase",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "telomere",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "telomere",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "proteomic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.7999999999999999
        },
        {
            "source": "proteomic",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.4
        },
        {
            "source": "diseases",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "neutrophilia",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "neutrophilia",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "diverticula",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "diverticula",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "intestinal",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "intestinal",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "inflammatory",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "inflammatory",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "microbiota",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "microbiota",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.5
        },
        {
            "source": "sirtuins",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "resveratrol",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "sirt1",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "sirt1",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "veratrol",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "veratrol",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "sirtuin",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "sirtuin",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "resveratrol",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "sirt1",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "sirt1",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "veratrol",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "veratrol",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "sirtuin",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "sirtuin",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "sirtuins",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.4
        },
        {
            "source": "age-dependent",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.4
        },
        {
            "source": "biomarkers",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "resveratrol",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.4
        },
        {
            "source": "resveratrol",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "resveratrol",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.4
        },
        {
            "source": "geroprotectors",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "sirt1",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "sirt1",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "sirt1",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "veratrol",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "veratrol",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "veratrol",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "sirtuin",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "sirtuin",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "sirtuin",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.4
        },
        {
            "source": "diseases",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "sirt1",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "veratrol",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "sirtuin",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "aging",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "resveratrol",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "sirt1",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "veratrol",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "sirtuin",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "age-dependent",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "resveratrol",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "resveratrol",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "resveratrol",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "geroprotectors",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "sirt1",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "sirt1",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "sirt1",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "veratrol",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "veratrol",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "veratrol",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "sirtuin",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "sirtuin",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "sirtuin",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "diseases",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "autophagy",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "autophagy",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "phenformin",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "phenformin",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "microrna",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "microrna",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "metformin",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "metformin",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "healthy",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.7999999999999999
        },
        {
            "source": "healthy",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "exercising",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "exercising",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "dieting",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "dieting",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "obesity",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "obesity",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "exercising",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "exercising",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "dieting",
            "target": "Physical and Cognitive Activities",
            "weight": 0.1
        },
        {
            "source": "dieting",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.1
        },
        {
            "source": "physical",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "physical",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "epidemiology",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "epidemiology",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "activity",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "activity",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "coronary",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "coronary",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "systolic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "systolic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "hypertensive",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "hypertensive",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "cancers",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "cancers",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "cancers",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "cancers",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "walking",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "walking",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "activities",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "activities",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "lifestyle",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.7
        },
        {
            "source": "lifestyle",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "healthy",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "lifestyle",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "healthy",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.30000000000000004
        },
        {
            "source": "health",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.30000000000000004
        },
        {
            "source": "lifestyle",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "inhabitants",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "inhabitants",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "inhabitants",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "lifestyle",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "lifestyle",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "ikaria",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "ikaria",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "ikaria",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.5
        },
        {
            "source": "aged",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Nutritional Interventions for Age",
            "weight": 0.4
        },
        {
            "source": "longevity",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.4
        },
        {
            "source": "ageing",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "healthy",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "healthy",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "inhabitants",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "ikaria",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "inhabitants",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "ikaria",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "inhabitants",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "inhabitants",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.1
        },
        {
            "source": "lifestyle",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "lifestyle",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.1
        },
        {
            "source": "ikaria",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "ikaria",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.4
        },
        {
            "source": "longevity",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.1
        },
        {
            "source": "healthy",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "healthy",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.1
        },
        {
            "source": "inhabitants",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "inhabitants",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "lifestyle",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "lifestyle",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "ikaria",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "ikaria",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "Healthy Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "aged",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "inhabitants",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "inhabitants",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "lifestyle",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "lifestyle",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "ikaria",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "ikaria",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "aged",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "healthy",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "healthy",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "elderly",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "elderly",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "x02",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "x02",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "lipidome",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "lipidome",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "lipidomics",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "lipidomics",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "lipids",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "lipids",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source":"",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source":"",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "elderly",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "elderly",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "elderly",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "elderly",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.4
        },
        {
            "source": "age",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "age",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.30000000000000004
        },
        {
            "source": "age",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Biomarker Discovery",
            "weight": 0.30000000000000004
        },
        {
            "source": "biomarker",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.30000000000000004
        },
        {
            "source": "biomarkers",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "age",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "researchers",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.5
        },
        {
            "source": "researchers",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "epidemiology",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.5
        },
        {
            "source": "epidemiology",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "researchers",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "epidemiology",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "researchers",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "epidemiology",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "researchers",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "epidemiology",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "researchers",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "epidemiology",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "researchers",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "researchers",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "epidemiology",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "epidemiology",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "Clinical Trials and Innovative Research",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Clinical Trials and Innovative Research",
            "weight": 0.1
        },
        {
            "source": "biomarkers",
            "target": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "weight": 0.1
        },
        {
            "source": "researchers",
            "target": "Clinical Trials and Innovative Research",
            "weight": 0.1
        },
        {
            "source": "researchers",
            "target": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "weight": 0.1
        },
        {
            "source": "epidemiology",
            "target": "Clinical Trials and Innovative Research",
            "weight": 0.1
        },
        {
            "source": "epidemiology",
            "target": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Clinical Trials and Innovative Research",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "weight": 0.1
        },
        {
            "source": "methylation",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "methylation",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "mutations",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "mtdna",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "methylation",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "methylation",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "telomere",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "mutations",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "mutations",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "mtdna",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "mtdna",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "methylation",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "mutations",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "mtdna",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "methylation",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "dna",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "telomere",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "mutations",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "mtdna",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "transgenic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "transgenic",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "degeneration",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "degeneration",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "ageing",
            "target": "Cellular Senescence and Aging",
            "weight": 0.1
        },
        {
            "source": "biomark",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.5
        },
        {
            "source": "biomark",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "proteome",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "proteome",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "proteomics",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.8999999999999999
        },
        {
            "source": "proteomics",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "dehydroepinadrosterone",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "dehydroepinadrosterone",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "diabetes",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "diabetes",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Environmental Exposures and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "hyperlipidemia",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "hyperlipidemia",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "accelerometers",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "accelerometers",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "diabetes",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.5
        },
        {
            "source": "diabetes",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "hispanic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "hispanic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "american",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "american",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "treadmill",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "treadmill",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "deaths",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "deaths",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "risks",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "risks",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "disease",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "disease",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "social",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "social",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "medicine",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "medicine",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "heart",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "heart",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "exertion",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "exertion",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "exercisers",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "exercisers",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "smoking",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "smoking",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "cigarette",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "cigarette",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "variability",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "variability",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "autonomic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "autonomic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "rate",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "rate",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "homeothermic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "homeothermic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "mortrtrtalality",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "mortrtrtalality",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "physiologic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "physiologic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "editorial",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "editorial",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "polymerases",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "polymerases",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "oxidative",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "nad",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "nad",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "nad+",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "nad+",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "nad+/nadh",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "nad+/nadh",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.7999999999999999
        },
        {
            "source": "longevity",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "metabolic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "metabolic",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "ratio",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "ratio",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Genomic Instability and Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "polymerases",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "nad",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "nad+",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "nad+/nadh",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "metabolic",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "ratio",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "polymerases",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "polymerases",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "oxidative",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "oxidative",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "nad",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "nad",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "nad+",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "nad+",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "nad+/nadh",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "nad+/nadh",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "ratio",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "ratio",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "nadph",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "nadph",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "polymerases",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "polymerases",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "oxidative",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "nad",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "nad",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "nad+",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "nad+",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "nad+/nadh",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "nad+/nadh",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "ratio",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "ratio",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "nadph",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "nadph",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "sirtuins",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "poly(adp-ribose)",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "polymerases",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "polymerases",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "oxidative",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "oxidative",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "nad",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "nad",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "nad+",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "nad+",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "nad+/nadh",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "nad+/nadh",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "ratio",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "ratio",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "nadph",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "nadph",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "sirt1",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "poly(adp-ribose)",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "p53",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "p53",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "polymerases",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "nicotinamide",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "nicotinamide",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "nad+",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "nad+/nadh",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "sirt1",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "sir2",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "sir2",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "ratio",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "adipokines",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "adipokines",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "●",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "●",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "metabolism",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "adipokine",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "adipokine",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "▶",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "▶",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "acids",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "acids",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "free",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "free",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "fatty",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "fatty",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.4
        },
        {
            "source": "longevity",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.4
        },
        {
            "source": "igf",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "protein",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Geroscience",
            "weight": 0.30000000000000004
        },
        {
            "source": "elegans",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Geroscience",
            "weight": 0.30000000000000004
        },
        {
            "source": "fasting-mimicking",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Geroscience",
            "weight": 0.30000000000000004
        },
        {
            "source": "protein",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Geroscience",
            "weight": 0.30000000000000004
        },
        {
            "source": "intake",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Geroscience",
            "weight": 0.30000000000000004
        },
        {
            "source": "source",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Geroscience",
            "weight": 0.5
        },
        {
            "source": "longevity",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Geroscience",
            "weight": 0.30000000000000004
        },
        {
            "source": "igf",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Geroscience",
            "weight": 0.30000000000000004
        },
        {
            "source": "healthspan",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.30000000000000004
        },
        {
            "source": "igf",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "diet",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "elegans",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "fasting-mimicking",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "protein",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "intake",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "source",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "igf",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "healthspan",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.1
        },
        {
            "source": "diet",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "elegans",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8999999999999999
        },
        {
            "source": "fasting-mimicking",
            "target": "Nutritional Interventions for Age",
            "weight": 0.30000000000000004
        },
        {
            "source": "fasting-mimicking",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.30000000000000004
        },
        {
            "source": "protein",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8999999999999999
        },
        {
            "source": "protein",
            "target": "Nutritional Interventions for Age",
            "weight": 0.30000000000000004
        },
        {
            "source": "protein",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.30000000000000004
        },
        {
            "source": "intake",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8999999999999999
        },
        {
            "source": "intake",
            "target": "Nutritional Interventions for Age",
            "weight": 0.30000000000000004
        },
        {
            "source": "intake",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.30000000000000004
        },
        {
            "source": "source",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8999999999999999
        },
        {
            "source": "source",
            "target": "Nutritional Interventions for Age",
            "weight": 0.30000000000000004
        },
        {
            "source": "source",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.30000000000000004
        },
        {
            "source": "igf",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8999999999999999
        },
        {
            "source": "healthspan",
            "target": "Nutritional Interventions for Age",
            "weight": 0.30000000000000004
        },
        {
            "source": "healthspan",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.30000000000000004
        },
        {
            "source": "elegans",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Microbiome and Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "protein",
            "target": "Microbiome and Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "intake",
            "target": "Microbiome and Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "source",
            "target": "Microbiome and Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "healthspan",
            "target": "Microbiome and Longevity",
            "weight": 0.30000000000000004
        },
        {
            "source": "elegans",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "elegans",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Healthy Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "fasting-mimicking",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Healthy Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "protein",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Healthy Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "intake",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Healthy Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "source",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "igf",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Healthy Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "healthspan",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "nutrition",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "nutrition",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "nutritional",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "nutritional",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "nutrition",
            "target": "Healthy Aging",
            "weight": 0.30000000000000004
        },
        {
            "source": "nutrition",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "nutrition",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "nutrition",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "fasting-mimicking",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "intake",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "source",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "healthspan",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "meat",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "meat",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "nutrition",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "vegetarian",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "vegetarian",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "nutrient",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "nutrient",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "nutrient",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "diabetes",
            "target": "Nutritional Interventions for Age",
            "weight": 0.1
        },
        {
            "source": "diabetes",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.1
        },
        {
            "source": "nutrient",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "diabetes",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "nutrient",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "diabetes",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.30000000000000004
        },
        {
            "source": "biomark",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "proteomics",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "proteomic",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "biomark",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "proteomics",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.30000000000000004
        },
        {
            "source": "proteomic",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "biomark",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "proteomics",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "proteomic",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "biomark",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "biomark",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "proteomics",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "proteomics",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "proteomic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "proteomic",
            "target": "Microbiome and Longevity",
            "weight": 0.1
        },
        {
            "source": "proteome",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "protein",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "proteins",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "proteins",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "mortality",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "mortality",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "peptide",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "peptide",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "peptides",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "peptides",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "neurodegenerative",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "neurodegenerative",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "neurodegenerative",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "neurodegenerative",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "neurodegenerative",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "neurodegenerative",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "fitness",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "fitness",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "alzheimer",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "evolved",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "evolved",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "evolution",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "evolution",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "apoe",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "apoe",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "chimpanzee",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "chimpanzee",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "chimpanzees",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "chimpanzees",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "evolved",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "evolved",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "evolution",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "evolution",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "apoe",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "apoe",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "chimpanzee",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "chimpanzee",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "chimpanzees",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "chimpanzees",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "lipid",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "lipid",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "endurance",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "endurance",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "primates",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "primates",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "erectus",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "erectus",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "lifespans",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "paleolithic",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "paleolithic",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "lifespans",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "lifespans",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "paleolithic",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "paleolithic",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "lifespans",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "lifespans",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "paleolithic",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "paleolithic",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "elderly",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.1
        },
        {
            "source": "elderly",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.1
        },
        {
            "source": "lifespans",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "lifespans",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "metabolomics",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "metabolomics",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "biochemistry",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "biochemistry",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "neuroproteomics",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "neuroproteomics",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "biomarker",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "metabolomics",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "metabolomics",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "metabolomics",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "biochemistry",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "biochemistry",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "biochemistry",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "proteomics",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "proteomics",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "proteomics",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "neuroproteomics",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "neuroproteomics",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "neuroproteomics",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "neurodegeneration",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "neurodegeneration",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "glycolytic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "glycolytic",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "glycolysis",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "glycolysis",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "schizophrenia",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.1
        },
        {
            "source": "schizophrenia",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "neurodegeneration",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "neurodegeneration",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "neurodegeneration",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "glycolytic",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "glycolytic",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "glycolytic",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "glycolysis",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "glycolysis",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "glycolysis",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "schizophrenia",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.1
        },
        {
            "source": "schizophrenia",
            "target": "Anti",
            "weight": 0.1
        },
        {
            "source": "schizophrenia",
            "target": "aging Pharmacology",
            "weight": 0.1
        },
        {
            "source": "neurodegeneration",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "neurodegeneration",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "glycolytic",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "glycolytic",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "glycolysis",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "glycolysis",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "schizophrenia",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "schizophrenia",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "deaths",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "deaths",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "gdp",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.1
        },
        {
            "source": "gdp",
            "target": "Environmental Exposures and Aging",
            "weight": 0.1
        },
        {
            "source": "genetic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "genetic",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "genetic",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "genetic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.5
        },
        {
            "source": "genetic",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.1
        },
        {
            "source": "genes",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "genetic",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.1
        },
        {
            "source": "genes",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "genetic",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "lifespan",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.1
        },
        {
            "source": "genes",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "genetic",
            "target": "Biomarker Discovery",
            "weight": 0.1
        },
        {
            "source": "genetic",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.1
        },
        {
            "source": "genes",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "genes",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "genetic",
            "target": "Geroscience",
            "weight": 0.1
        },
        {
            "source": "genetic",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.1
        },
        {
            "source": "genes",
            "target": "Technological Advancements in Longevity",
            "weight": 0.1
        },
        {
            "source": "genes",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.1
        },
        {
            "source": "genetic",
            "target": "Technological Advancements in Longevity",
            "weight": 0.1
        },
        {
            "source": "genetic",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Technological Advancements in Longevity",
            "weight": 0.1
        },
        {
            "source": "longevity",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.1
        },
        {
            "source": "adipogenesis",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.1
        },
        {
            "source": "adipogenesis",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "sir2",
            "target": "Genomic Instability and Aging",
            "weight": 0.1
        },
        {
            "source": "jellyfish",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "jellyfish",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "lifespans",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "cytochrome",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "cytochrome",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "oxidase",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "oxidase",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.1
        },
        {
            "source": "jellyfish",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "lifespans",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "cytochrome",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "oxidase",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.1
        },
        {
            "source": "age",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "age",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "motivation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "motivation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "motivational",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "motivational",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "motivational",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "motivational",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "age",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "age",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "motivation",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "motivation",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "motivational",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "motivational",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "age",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "age",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "health",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "health",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "motivation",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.1
        },
        {
            "source": "motivation",
            "target": "being",
            "weight": 0.1
        },
        {
            "source": "diabetes",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "diabetes",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "klotho",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "klotho",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "entropy",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "entropy",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "biothermodynamics",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "biothermodynamics",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "generation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "generation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "human",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "human",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "entropy",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "entropy",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "biothermodynamics",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "biothermodynamics",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "generation",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "generation",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "human",
            "target": "Healthy Aging",
            "weight": 0.1
        },
        {
            "source": "human",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.1
        },
        {
            "source": "athletic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.30000000000000004
        },
        {
            "source": "athletic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.30000000000000004
        },
        {
            "source": "athletics",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "athletics",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "cardiopulmonary",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "cardiopulmonary",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "athlete",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "athlete",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "athleticism",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.1
        },
        {
            "source": "athleticism",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "Cellular Senescence and Aging",
            "weight": 1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "Epigenetic Regulation of Aging",
            "weight": 1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "Genomic Instability and Aging",
            "weight": 1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "Altered Intercellular Communication",
            "weight": 1
        },
        // {
        //     "source": "Theoretical Frameworks and Longevity Models",
        //     "target": "Theories of Aging",
        //     "weight": 1
        // },
        {
            "source": "Theoretical Frameworks and Longevity Models",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 1
        },
        {
            "source": "Biomarkers and Predictive Indicators of Longevity",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 1
        },
        {
            "source": "Biomarkers and Predictive Indicators of Longevity",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 1
        },
        {
            "source": "Biomarkers and Predictive Indicators of Longevity",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 1
        },
        {
            "source": "Biomarkers and Predictive Indicators of Longevity",
            "target": "Biomarker Discovery",
            "weight": 1
        },
        {
            "source": "Biomarkers and Predictive Indicators of Longevity",
            "target": "Omics in Medicine:Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 1
        },
        {
            "source": "Geroscience",
            "target": "Definition and Scope of Geroscience",
            "weight": 1
        },
        {
            "source": "Geroscience",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 1
        },
        {
            "source": "Geroscience",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 1
        },
        {
            "source": "Pharmacological and Molecular Interventions",
            "target": "Anti-aging Pharmacology",
            "weight": 1
        },
        {
            "source": "Pharmacological and Molecular Interventions",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 1
        },
        {
            "source": "Pharmacological and Molecular Interventions",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 1
        },
        {
            "source": "Lifestyle and Dietary Interventions",
            "target": "Nutritional Interventions for Age-related Diseases and Cellular Repair",
            "weight": 1
        },
        {
            "source": "Lifestyle and Dietary Interventions",
            "target": "Microbiome and Longevity",
            "weight": 1
        },
        {
            "source": "Lifestyle and Dietary Interventions",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 1
        },
        {
            "source": "Lifestyle and Dietary Interventions",
            "target": "Mind-Body Approaches (Meditation, Yoga)",
            "weight": 1
        },
        {
            "source": "Lifestyle and Dietary Interventions",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1
        },
        {
            "source": "Lifestyle and Dietary Interventions",
            "target": "Rest and Sleep ",
            "weight": 1
        },
        {
            "source": "Regenerative and Restorative Therapies",
            "target": "Regenerative Medicine (Stem Cell Therapy, Tissue Engineering)",
            "weight": 1
        },
        {
            "source": "Regenerative and Restorative Therapies",
            "target": "Bioprinting and Tissue Engineering for Regenerative Medicine",
            "weight": 1
        },
        {
            "source": "Physical and Cognitive Activities",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 1
        },
        {
            "source": "Physical and Cognitive Activities",
            "target": "Mental Health, Cognitive Fitness, and Brain Health Training",
            "weight": 1
        },
        {
            "source": "Preventive Medicine",
            "target": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "weight": 1
        },
        {
            "source": "Preventive Medicine",
            "target": "Vaccination Strategies and Epidemiology for the Elderly",
            "weight": 1
        },
        {
            "source": "Preventive Medicine",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 1
        },
        {
            "source": "Preventive Medicine",
            "target": "Evidence-Based Practices and Guidelines for Preventive Health Care",
            "weight": 1
        },
        {
            "source": "Public Health Measures and Screening",
            "target": "Vaccination Strategies and Epidemiology for the Elderly",
            "weight": 1
        },
        {
            "source": "Public Health Measures and Screening",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 1
        },
        {
            "source": "Environmental and Social Wellbeing",
            "target": "Environmental Exposures and Aging",
            "weight": 1
        },
        {
            "source": "Environmental and Social Wellbeing",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 1
        },
        {
            "source": "Healthy Aging",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 1
        },
        {
            "source": "Healthy Aging",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well-being",
            "weight": 1
        },
        {
            "source": "Healthy Aging",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 1
        },
        {
            "source": "Clinical Trials and Innovative Research",
            "target": "Phase I-IV Trials of Age-related Treatments",
            "weight": 1
        },
        {
            "source": "Clinical Trials and Innovative Research",
            "target": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "weight": 1
        },
        {
            "source": "Clinical Trials and Innovative Research",
            "target": "Omics Technologies:Application of Omics Data in Clinical Trial Design and Personalized Medicine",
            "weight": 1
        },
        {
            "source": "Case Reports on Longevity",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 1
        },
        {
            "source": "Case Reports on Longevity",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 1
        },
        {
            "source": "Clinical Implications",
            "target": "Integrating cutting-edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 1
        },
        {
            "source": "Clinical Implications",
            "target": "The impact of biomarker discovery on diagnosis, treatment, and preventative care.",
            "weight": 1
        },
        {
            "source": "Clinical Implications",
            "target": "Personalized medicine in the context of aging: Utilizing genetic, proteomic, and metabolomic insights to tailor interventions.",
            "weight": 1
        },
        {
            "source": "Health Policy and Elderly Care",
            "target": "Policy Evaluations and Models of Care for the Elderly",
            "weight": 1
        },
        {
            "source": "Health Policy and Elderly Care",
            "target": "Geriatric Workforce Challenges and Economic Analyses",
            "weight": 1
        },
        {
            "source": "Ethical and Educational Aspects",
            "target": "Ethics of Life Extension and Public Education on Aging",
            "weight": 1
        },
        {
            "source": "Ethical and Educational Aspects",
            "target": "Gender Dimension and Public Perceptions of Anti-aging Technologies",
            "weight": 1
        },
        {
            "source": "Technological Advancements in Longevity",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 1
        },
        {
            "source": "Technological Advancements in Longevity",
            "target": "Wearable Devices and Health Monitoring Technologies",
            "weight": 1
        },
        {
            "source": "Future Prospects and Emerging Approaches",
            "target": "Senolytic Therapies and Cellular Reprogramming",
            "weight": 1
        },
        {
            "source": "Future Prospects and Emerging Approaches",
            "target": "Educational and Promotional Tools for Longevity Practices",
            "weight": 1
        }
    ]
})
};

export default useMoch;
