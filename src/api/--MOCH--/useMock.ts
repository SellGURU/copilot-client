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
};

export default useMoch;
