import { useNavigate } from 'react-router-dom'
import { HorizontalFlex } from '../../sc-css/atomic'

export default function SubSettingsShortcut({darkMode, sub}) {
    
    const navigate = useNavigate()

    return (
        <HorizontalFlex style={{ gap: '1rem' }}>
            <p style={{ fontSize: '0.7rem' }}>Community settings (access to creator only).</p>
            <svg
                onClick={() => navigate(`/r/${sub.id}/subSettings`)}
                className={`${darkMode} mouse-pointer`} fill="currentColor" width="30px" height="30px"
                // 
                viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 15c-.822 0-1.5.678-1.5 1.5v.785c-.393.114-.77.267-1.13.465l-.313-.314c-.582-.582-1.54-.582-2.12 0-.583.58-.583 1.54 0 2.12l.313.315c-.2.36-.354.736-.47 1.13h-.78c-.822 0-1.5.678-1.5 1.5s.678 1.5 1.5 1.5h.785c.114.393.267.77.465 1.13l-.314.313c-.582.582-.582 1.54 0 2.12.58.583 1.54.583 2.12 0l.315-.313c.36.2.736.354 1.13.47v.78c0 .822.678 1.5 1.5 1.5s1.5-.678 1.5-1.5v-.785c.393-.114.77-.267 1.13-.465l.313.314c.582.582 1.54.582 2.12 0 .583-.58.583-1.54 0-2.12l-.313-.315c.2-.36.354-.736.47-1.13h.78c.822 0 1.5-.678 1.5-1.5s-.678-1.5-1.5-1.5h-.785c-.114-.393-.267-.77-.465-1.13l.314-.313c.582-.582.582-1.54 0-2.12-.58-.583-1.54-.583-2.12 0l-.315.313c-.36-.2-.736-.354-1.13-.47v-.78c0-.822-.678-1.5-1.5-1.5zm0 1c.286 0 .5.214.5.5v1c0 .328.084.508.38.588.57.115 1.112.34 1.597.66.198.132.462.106.63-.062l.543-.543c.202-.202.505-.202.707 0 .202.202.202.505 0 .707l-.543.543c-.168.167-.195.43-.064.628.32.486.544 1.028.658 1.597.08.302.344.383.592.383h1c.286 0 .5.214.5.5 0 .286-.214.5-.5.5h-1c-.394 0-.528.158-.588.38-.115.57-.34 1.112-.66 1.597-.132.198-.106.462.062.63l.543.543c.202.202.202.505 0 .707-.202.202-.505.202-.707 0l-.543-.543c-.167-.168-.43-.195-.628-.064-.486.32-1.028.544-1.597.658-.264.07-.383.34-.383.592v1c0 .286-.214.5-.5.5-.286 0-.5-.214-.5-.5v-1c0-.37-.138-.523-.38-.588-.57-.115-1.112-.34-1.597-.66-.198-.132-.462-.106-.63.062l-.543.543c-.202.202-.505.202-.707 0-.202-.202-.202-.505 0-.707l.543-.543c.168-.167.195-.43.064-.628-.32-.486-.544-1.028-.658-1.597-.05-.252-.262-.383-.592-.383h-1c-.286 0-.5-.214-.5-.5 0-.286.214-.5.5-.5h1c.445 0 .524-.143.588-.38.115-.57.34-1.112.66-1.597.132-.198.106-.462-.062-.63l-.543-.543c-.202-.202-.202-.505 0-.707.202-.202.505-.202.707 0l.543.543c.167.168.43.195.628.064.486-.32 1.028-.544 1.597-.658.402-.092.383-.406.383-.592v-1c0-.286.214-.5.5-.5zm0 4c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5s-.666 1.5-1.5 1.5-1.5-.666-1.5-1.5.666-1.5 1.5-1.5zm-10-13C10.02 8 8 10.02 8 12.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5S14.98 8 12.5 8zm0 1c1.94 0 3.5 1.56 3.5 3.5S14.44 16 12.5 16 9 14.44 9 12.5 10.56 9 12.5 9zm-1-9c-.822 0-1.5.678-1.5 1.5v1.91c-.763.21-1.494.51-2.182.9L5.943 2.437c-.582-.582-1.54-.582-2.123 0L2.406 3.85c-.58.58-.58 1.54 0 2.12l1.887 1.887c-.382.677-.68 1.394-.887 2.143H1.5c-.822 0-1.5.678-1.5 1.5v2c0 .822.678 1.5 1.5 1.5h1.908c.207.757.507 1.48.893 2.164l-1.894 1.893c-.582.582-.582 1.54 0 2.123l1.414 1.414c.582.582 1.54.582 2.123 0l1.897-1.9c.68.39 1.404.69 2.16.898V23.5c0 .822.678 1.5 1.5 1.5h2c.664 0 .66-1 0-1h-2c-.286 0-.5-.214-.5-.5v-2.234c0-.234-.16-.437-.39-.49-.93-.212-1.82-.58-2.63-1.09-.196-.124-.452-.095-.617.068l-.006.01-.003.004-2.118 2.12c-.2.2-.507.2-.71 0l-1.413-1.415c-.2-.202-.2-.508 0-.71l2.123-2.12.004-.004.002-.003c.162-.165.19-.42.067-.616-.508-.81-.874-1.7-1.085-2.63-.052-.23-.255-.39-.49-.39H1.5c-.286 0-.5-.214-.5-.5v-2c0-.286.214-.5.5-.5h2.234c.234 0 .437-.16.49-.39.21-.923.574-1.806 1.077-2.61.125-.198.095-.454-.07-.62L3.113 5.265c-.202-.202-.202-.505 0-.707l1.414-1.414c.202-.202.508-.202.71 0L7.34 5.248c.165.165.42.194.62.07.814-.512 1.71-.88 2.647-1.093.228-.052.39-.255.39-.49V1.5c0-.286.214-.5.5-.5h2c.286 0 .5.214.5.5v2.234c0 .234.16.437.39.49.93.212 1.817.58 2.626 1.089.197.123.454.094.62-.07l2.1-2.1c.202-.202.505-.202.707 0l1.414 1.414c.202.202.202.505 0 .707L19.764 7.36c-.165.164-.194.42-.07.62.506.81.87 1.697 1.08 2.63.053.228.256.39.49.39H23.5c.286 0 .5.214.5.5v2c0 .668 1 .652 1 0v-2c0-.822-.678-1.5-1.5-1.5h-1.908c-.207-.756-.505-1.48-.89-2.164l1.862-1.865c.582-.58.582-1.54 0-2.12L21.15 2.436c-.58-.582-1.54-.582-2.12 0l-1.87 1.87c-.68-.39-1.405-.69-2.16-.898V1.5c0-.822-.678-1.5-1.5-1.5z" />
            </svg>
        </HorizontalFlex>
    )
}
