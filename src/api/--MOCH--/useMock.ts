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
};

export default useMoch;
