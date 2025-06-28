
export interface LyzerResponse {
  response: string;
  status: string;
}

export const fetchLyzerInstructions = async (): Promise<LyzerResponse> => {
  try {
    const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'sk-default-CL6AFNGZ13OwtFJLmRaaOCbJMQxU3wtd'
      },
      body: JSON.stringify({
        user_id: "joeraz@gmail.com",
        agent_id: "685e78cf5374a816990f951d",
        session_id: "685e78cf5374a816990f951d-eowrb85cym",
        message: "Please provide website building instructions and requirements"
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Lyzer instructions:', error);
    throw error;
  }
};
