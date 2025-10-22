import LearningModeForm from 'components/LearningModeForm/LearningModeForm';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LearningTitleSection from 'components/LearningTitleSection/LearningTitleSection';
import LearningScoreBar from 'components/LearningScoreBar/LearningScoreBar';
import LearningWordCard from 'components/LearningWordCard/LearningWordCard';

const LearningPage = () => {
  const [isLearning, setIsLearning] = useState(false);
  const { dictId } = useParams();
  const [settings, setSettings] = useState({
    tl: dictId,
    mode: '',
  });
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [wordsToLearn, setWordsToLearn] = useState([]);
  const [currentProgress, setCurrentProgress] = useState(0);

  return (
    <>
      <LearningTitleSection />
      {isLearning && (
        <>
          <LearningScoreBar
            total={wordsToLearn.length}
            currentProgress={currentProgress}
            isAnswered={isAnswered}
            score={score}
          />
          <LearningWordCard
            currentWordCount={currentProgress}
            word={wordsToLearn[currentProgress]}
            toNextWord={setCurrentProgress}
            isAnswered={isAnswered}
            setIsAnswered={setIsAnswered}
            settings={settings}
            score={score}
            setScore={setScore}
          />
        </>
      )}
      {!isLearning && (
        <LearningModeForm
          settings={settings}
          startLearning={setIsLearning}
          setWords={setWordsToLearn}
          setSettings={setSettings}
        />
      )}
    </>
  );
};

export default LearningPage;
