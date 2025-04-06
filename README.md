# GreenBot 🌱

GreenBot is an AI-powered plant care assistant that helps users identify plant diseases and provides personalized care recommendations. This full-stack application combines computer vision for plant disease detection with a conversational AI interface for plant care advice.

## 🌟 Features

- **Plant Disease Detection**: Upload images of plants to detect diseases using AI
- **Real-time Analysis**: Get instant results with confidence scores and detailed information
- **Personalized Care Advice**: Receive tailored recommendations based on plant type and condition
- **Multilingual Support**: Chat interface available in multiple languages
- **User-friendly Interface**: Modern, responsive design for seamless user experience

## 🛠️ Tech Stack

### Frontend
- React.js
- Material-UI
- Axios for API communication
- React Router for navigation

### Backend
- FastAPI (Python)
- TensorFlow for image processing
- MobileNetV2 for plant disease detection
- OpenAI API for chat functionality
- Uvicorn for ASGI server

## 🚀 Getting Started

### Prerequisites
- Python 3.11+
- Node.js 16+
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/greenbot.git
cd greenbot
```

2. Set up the backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. Set up the frontend:
```bash
cd frontend
npm install
```

4. Create a `.env` file in the backend directory:
```env
OPENAI_API_KEY=your_api_key_here
```

### Running the Application

1. Start the backend server:
```bash
cd backend
source venv/bin/activate  # On Windows: venv\Scripts\activate
python main.py
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
greenbot/
├── backend/
│   ├── models/
│   │   └── plant_disease_model.py
│   ├── services/
│   │   └── chat_service.py
│   ├── main.py
│   ├── requirements.txt
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   └── App.js
    ├── package.json
    └── public/
```

## 🔍 How It Works

1. **Image Analysis**:
   - Users upload plant images
   - MobileNetV2 model processes the image
   - Disease detection with confidence scores
   - Detailed analysis and recommendations

2. **Chat Interface**:
   - Natural language processing for plant care questions
   - Multilingual support
   - Personalized responses based on plant type and condition

## 🎯 Key Features Implementation

### Plant Disease Detection
- Uses MobileNetV2 pre-trained model
- Custom fine-tuning for plant disease classification
- Confidence scoring and severity assessment
- Detailed disease information and treatment recommendations

### Chat Interface
- OpenAI API integration
- Context-aware responses
- Multilingual support
- Personalized care recommendations

## 📝 Documentation

### API Endpoints

#### POST /analyze-image
- Accepts image file upload
- Returns disease analysis and recommendations

#### POST /chat
- Accepts text message and language preference
- Returns AI-generated response

### Environment Variables
- `OPENAI_API_KEY`: Your OpenAI API key

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- PlantVillage dataset for training data
- OpenAI for language model capabilities
- TensorFlow team for the MobileNetV2 model
- FastAPI team for the excellent web framework 