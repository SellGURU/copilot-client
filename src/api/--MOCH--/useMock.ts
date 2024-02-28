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
};

export default useMoch;
