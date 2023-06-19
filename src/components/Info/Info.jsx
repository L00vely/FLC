import { Button } from '../Button/Button';

export const Info = () => {
  return (
    <>
        <div className="info-container">
            <div className="sections-container">
                <Button className="info-button" text = {"QUIÉNES SOMOS"} />
                <Button className="info-button" text = {"MISIÓN"} />
                <Button className="info-button" text = {"VISIÓN"} />
            </div>
        </div>
    </>
  )
}
