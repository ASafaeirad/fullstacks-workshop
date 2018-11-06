import React, { useState } from 'react';
import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';
import classNames from 'classnames';

const DeleteButton = styled('button')`
  background: transparent;
  position: absolute;
  right: 0;
  border: none;
  height: 100%;
  color: ${props => props.theme.colors.feedbacks.error};
  opacity: .4;

  outline: none !important;

  ${props => props.hover && 'opacity: 1;'}
`;

const ButtonContainer = styled('div')`
  display: flex;
  flex-flow: column nowrap;
`;

const EditableLesson = ({ sectionIndex, onRemoveLesson, onReorderLesson, defaultValue, onSubmit, index, isLast, isFirst }) => {
  const [edited, setEdited] = useState(false);
  const [title, setTitle] = useState(defaultValue);
  const [hover, setHover] = useState(false);

  const submit = () => {
    setEdited(false);
    onSubmit({ sectionIndex, index, value: title });
  };

  const remove = () => {
    onRemoveLesson({ sectionIndex, index });
  };

  const up = () => {
    onReorderLesson({ from: index, to: index - 1, sectionIndex });
  };

  const down = () => {
    onReorderLesson({ from: index, to: index + 1, sectionIndex });
  };

  return (
    <LessonInputContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={classNames('ui input action left small fluid', { action: edited })}
    >
      <ButtonContainer>
        <button type="button" disabled={isFirst} className="ui button teal" style={{ padding: '0 5px', flex: 1, borderRadius: 0, borderTopLeftRadius: 5, margin: 0 }} onClick={up}>
          <i className="angle up icon" style={{ margin: 0 }} />
        </button>
        <button type="button" disabled={isLast} className="ui button teal" style={{ padding: '0 5px', flex: 1, borderRadius: 0, borderBottomLeftRadius: 5, margin: 0 }} onClick={down}>
          <i className="angle down icon" style={{ margin: 0 }} />
        </button>
      </ButtonContainer>
      <div className={classNames('ui input', { action: edited })} style={{ position: 'relative', width: '100%' }}>
        <input
          type="text"
          placeholder="Add Lesson..."
          value={title}
          style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          onKeyPress={(e) => {
            if (e.charCode === 13) {
              e.preventDefault();
              submit();
            }
          }}
          onChange={(e) => {
            setEdited(true);
            setTitle(e.target.value);
          }}
        />
        <DeleteButton type="button" tabIndex="-1" hover={hover} onClick={remove}>
          <i className="remove icon" />
        </DeleteButton>
      </div>
      {edited
        && (
        <button type="button" className="ui icon button teal" onClick={submit}>
          <i className="check icon" />
        </button>
        )}
    </LessonInputContainer>
  );
};

const LessonsContainer = styled('div')`
  margin-bottom: 10px;
`;

const LessonInputContainer = styled('div')`
  margin-left: 1em;
  margin-bottom: 1em;
`;

const AddLesson = ({ sectionIndex, onAddLesson }) => {
  const [title, setTitle] = useState('');

  const addLesson = () => {
    if (title === '') {
      return;
    }

    onAddLesson({ sectionIndex, value: title });
    setTitle('');
  };

  return (
    <LessonInputContainer className="ui left action input small fluid">
      <button type="button" disabled={!title} onClick={addLesson} className="ui teal labeled icon button">
        <i className="add icon" />
        Add Lesson
      </button>
      <input
        type="text"
        placeholder="New Lesson..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            e.preventDefault();
            addLesson();
          }
        }}
      />
    </LessonInputContainer>
  );
};

const SectionInputContainer = styled('div')`
  margin-bottom: 2em;
`;

const EditableTitle = ({ defaultValue, onSubmit, onRemove, sectionIndex, isFirst, isLast, onReorderSection }) => {
  const [edited, setEdited] = useState(false);
  const [title, setTitle] = useState(defaultValue);
  const [hover, setHover] = useState(false);

  const submit = () => {
    setEdited(false);
    onSubmit({ sectionIndex, value: title });
  };

  const remove = async () => {
    const confirm = window.confirm('Really?');
    if (confirm) {
      onRemove({ sectionIndex });
    }
  };

  const up = () => {
    onReorderSection({ from: sectionIndex, to: sectionIndex - 1, sectionIndex });
  };

  const down = () => {
    onReorderSection({ from: sectionIndex, to: sectionIndex + 1, sectionIndex });
  };

  return (
    <SectionInputContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={classNames('ui input small fluid', { action: edited })}
    >
      <ButtonContainer>
        <button type="button" disabled={isFirst} className="ui button teal" style={{ padding: '0 5px', flex: 1, borderRadius: 0, borderTopLeftRadius: 5, margin: 0 }} onClick={up}>
          <i className="angle up icon" style={{ margin: 0 }} />
        </button>
        <button type="button" disabled={isLast} className="ui button teal" style={{ padding: '0 5px', flex: 1, borderRadius: 0, borderBottomLeftRadius: 5, margin: 0 }} onClick={down}>
          <i className="angle down icon" style={{ margin: 0 }} />
        </button>
      </ButtonContainer>
      <div className={classNames('ui input', { action: edited })} style={{ position: 'relative', width: '100%' }}>

        <input
          type="text"
          placeholder="Add Lesson..."
          value={title}
          style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          onKeyPress={(e) => {
            if (e.charCode === 13) {
              e.preventDefault();
              submit();
            }
          }}
          onChange={(e) => {
            setEdited(true);
            setTitle(e.target.value);
          }}
        />
        <DeleteButton type="button" tabIndex="-1" hover={hover} onClick={remove}>
          <i className="remove icon" />
        </DeleteButton>
      </div>
      {edited
      && (
      <button type="button" className="ui icon button teal" onClick={submit}>
        <i className="check icon" />
      </button>
      )}
    </SectionInputContainer>
  );
};

const Section = ({ onChange, onReorderSection, onReorderLesson, lessons, title, onAddLesson, onSectionRemove, onRemoveLesson, onSubmitLessonChange, sectionIndex, onTitleChange }) => (
  <>
    <EditableTitle
      onReorderSection={onReorderSection}
      onRemove={onSectionRemove}
      sectionIndex={sectionIndex}
      onSubmit={(newTitle) => {
        onTitleChange(newTitle);
        onChange();
      }}
      defaultValue={title}
    />
    <LessonsContainer>
      {lessons.map((lesson, i) => (
        <EditableLesson
          sectionIndex={sectionIndex}
          onRemoveLesson={onRemoveLesson}
          onReorderLesson={onReorderLesson}
          index={i}
          key={lesson}
          isFirst={i === 0}
          isLast={i === lessons.length - 1}
          defaultValue={lesson}
          onSubmit={(newLessson) => {
            onSubmitLessonChange(newLessson);
            onChange();
          }}
        />
      ))}
    </LessonsContainer>
     <>
       <AddLesson
         onAddLesson={(newLesson) => {
           onAddLesson(newLesson);
           onChange();
         }}
         sectionIndex={sectionIndex}
       />
       <div className="ui section divider" />
     </>
  </>
);

Section.propTypes = {
  title: string.isRequired,
  lessons: arrayOf(string).isRequired,
};

const AddSectionInput = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const submit = () => {
    if (title === '') {
      return;
    }

    onSubmit({ value: title });
    setTitle('');
  };

  return (
    <SectionInputContainer className="ui left action input small fluid">
      <button type="button" disabled={!title} onClick={onSubmit} className="ui teal labeled icon button">
        <i className="add icon" />
        Add Section
      </button>
      <input
        type="text"
        placeholder="New Lesson..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            e.preventDefault();
            submit();
          }
        }}
      />
    </SectionInputContainer>
  );
};

const EditableCurriculum = ({ initalCurriculum, onChange }) => {
  const [curriculum, setCurriculum] = useState(initalCurriculum);

  return (
    <>
      {curriculum.map((section, i) => (
        <Section
          sectionIndex={i}
          key={section.title}
          lessons={section.lessons}
          title={section.title}
          onChange={() => { onChange(curriculum); }}
          onRemoveLesson={(e) => {
            const newCur = curriculum;
            newCur[e.sectionIndex].lessons.splice(e.index, 1);
            setCurriculum(newCur);
          }}
          onSubmitLessonChange={(e) => {
            const newCur = curriculum;
            newCur[e.sectionIndex].lessons[e.index] = e.value;
            setCurriculum(newCur);
          }}
          onAddLesson={(e) => {
            const newCur = curriculum;
            newCur[e.sectionIndex].lessons.push(e.value);
            setCurriculum(newCur);
          }}
          onTitleChange={(e) => {
            const newCur = curriculum;
            newCur[e.sectionIndex].title = e.value;
            setCurriculum(newCur);
          }}
          onSectionRemove={(e) => {
            const newCur = curriculum;
            newCur.splice(e.sectionIndex, 1);
            setCurriculum(newCur);
          }}
          onReorderLesson={(e) => {
            const newCur = curriculum;
            const tmp = newCur[e.sectionIndex].lessons[e.from];
            newCur[e.sectionIndex].lessons[e.from] = newCur[e.sectionIndex].lessons[e.to];
            newCur[e.sectionIndex].lessons[e.to] = tmp;
            setCurriculum(newCur);
          }}
          onReorderSection={(e) => {
            const newCur = curriculum;
            const tmp = newCur[e.from];
            newCur[e.from] = newCur[e.to];
            newCur[e.to] = tmp;
            setCurriculum(newCur);
          }}

        />
      ))}
      <AddSectionInput onSubmit={(e) => {
        const newCur = curriculum;
        newCur.push({ title: e.value, lessons: [] });
        setCurriculum(newCur);
      }}
      />
    </>
  );
};

export default EditableCurriculum;
