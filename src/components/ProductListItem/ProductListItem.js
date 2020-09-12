import React from 'react'
import './ProductListItem.sass'

const ProductListItem = () => {

  return (
    <div className="d-flex justify-content-center flex-wrap">
      <div className="card p-3 py-4">
        <h5 className="mb-0">Кофе <b><span>$10</span></b></h5>

        <div className="mt-4">
          <label className="radio">
            <input type="radio" name="p-type" value="Зерна" />
            <span>Зерна $4</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-type" value="Тип обжарки" />
            <span>Тип обжарки $5</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-type" value="Молоко" />
            <span>Молоко $2</span>
          </label>
        </div>

        <div className="mt-4">
          <label className="radio">
            <input type="radio" name="p-add" value="Сиропы" />
            <span>Сиропы $3</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-add" value="Корица" />
            <span>Корица $6</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-add" value="Сахар" />
            <span>Сахар $2</span>
          </label>
        </div>

        <div className="mt-4">
          <label className="radio">
            <input type="radio" name="p-place" value="Собой в стаканчике" />
            <span>Собой в стаканчике</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-place" value="На месте в чашке" />
            <span>На месте в чашке</span>
          </label>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <button className="btn btn-primary btn-sm" type="button">Добавить</button>
        </div>

      </div>
      <div className="card p-3 py-4">
        <h5 className="mb-0">Кофе <b><span>$10</span></b></h5>

        <div className="mt-4">
          <label className="radio">
            <input type="radio" name="p-type" value="Зерна" />
            <span>Зерна $4</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-type" value="Тип обжарки" />
            <span>Тип обжарки $5</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-type" value="Молоко" />
            <span>Молоко $2</span>
          </label>
        </div>

        <div className="mt-4">
          <label className="radio">
            <input type="radio" name="p-add" value="Сиропы" />
            <span>Сиропы $3</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-add" value="Корица" />
            <span>Корица $6</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-add" value="Сахар" />
            <span>Сахар $2</span>
          </label>
        </div>

        <div className="mt-4">
          <label className="radio">
            <input type="radio" name="p-place" value="Собой в стаканчике" />
            <span>Собой в стаканчике</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-place" value="На месте в чашке" />
            <span>На месте в чашке</span>
          </label>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <button className="btn btn-primary btn-sm" type="button">Добавить</button>
        </div>

      </div>
      <div className="card p-3 py-4">
        <h5 className="mb-0">Кофе <b><span>$10</span></b></h5>

        <div className="mt-4">
          <label className="radio">
            <input type="radio" name="p-type" value="Зерна" />
            <span>Зерна $4</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-type" value="Тип обжарки" />
            <span>Тип обжарки $5</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-type" value="Молоко" />
            <span>Молоко $2</span>
          </label>
        </div>

        <div className="mt-4">
          <label className="radio">
            <input type="radio" name="p-add" value="Сиропы" />
            <span>Сиропы $3</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-add" value="Корица" />
            <span>Корица $6</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-add" value="Сахар" />
            <span>Сахар $2</span>
          </label>
        </div>

        <div className="mt-4">
          <label className="radio">
            <input type="radio" name="p-place" value="Собой в стаканчике" />
            <span>Собой в стаканчике</span>
          </label>
          <label className="radio">
            <input type="radio" name="p-place" value="На месте в чашке" />
            <span>На месте в чашке</span>
          </label>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <button className="btn btn-primary btn-sm" type="button">Добавить</button>
        </div>

      </div>
    </div>
  )

}

export default ProductListItem
