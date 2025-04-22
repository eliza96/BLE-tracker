# 🧠 AI Engine – RSSI-based Localization Model

This module handles the machine learning components of the BLE Tracker system. It includes model training, prediction, and data preprocessing for indoor localization based on BLE RSSI values.

---

## 📚 Overview

_Describe what this module does and why it's important (e.g., "uses RSSI data from multiple edge devices to estimate indoor position")._

---

## 📦 Dependencies

_List the Python packages required, like scikit-learn, pandas, numpy, etc. Mention how to install them using `requirements.txt`._

---

## 🧹 Data Preprocessing

_Explain how raw MQTT or Supabase data is transformed into usable features for training._

---

## 🧠 Model Architecture

_Briefly describe the model(s) used — e.g., RandomForest, KNN, Neural Networks — and why you chose them._

---

## 🏋️‍♀️ Training

_Instruct how to run the training script, what input it needs, and what output (e.g., saved model file) it generates._

```bash
python train.py
```

---

## 🎯 Inference / Prediction

_How to run the prediction using live or test data._

```bash
python predict.py
```

---

## 📂 File Structure

| File          | Description                           |
|---------------|---------------------------------------|
| `train.py`    | Script to train and save the model    |
| `predict.py`  | Script to load model and predict      |
| `preprocess.py`| (optional) Data cleanup and prep     |
| `models/`     | Folder for saved models (.pkl, .joblib)|

---

## 🧪 Evaluation & Accuracy

_How model performance is evaluated (e.g., accuracy, confusion matrix, location error)._

---

## ⚠️ Notes

_Placeholders for tips, limitations, future improvements, or known issues._
