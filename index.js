//Ввод
function request(e)
{
	if(e == 13)//Проверка нажатия клавиши Enter (код 13)
	{
		var data = textLineID.value;
		textLineID.value = "";
		textarea_0.value += "< " + data + "\n";
		textarea_0.scrollTop=textarea_0.scrollHeight;
		dataHandler(data);
	}
}

//Вывод
function answer(data)
{
	if(data != "undefined" && data != undefined)
	{
		textarea_0.value += "> " + data + "\n";
		textarea_0.scrollTop=textarea_0.scrollHeight;
	}
}

//Максимальный размер базы данных 
var dbSize = 1024;
//База данных
var dataBase = ["Привет.", "Даров!", "Как дела?", "Хорошо."];
var R = 0;//Счётчик чтения
var W = 0;//Счётчик записи

//Фунция переполнения значения переменной, чтоб не выходило за размер массива,
//она как бы закольцовывает базу
function incX(X){if(X++ == dbSize)return 0; return X;}

//Это основная функция, её алгоритм построен на последовательности появления данных
function dataHandler(data)
{
	for(i = 0; i < dbSize; i++)//Ищет совпадения в базе
	{//Но не по индексу i, а по индексу R
		if(dataBase[R] == data)//Если совпадение найдено
		{
			R = incX(R);//Переходит к следующей позиции
			answer(dataBase[R]);//Даёт ответ
			break;//И завершает поиск
		}
		R = incX(R);//Переходит к следующей позиции
	}
	dataBase[W] = data;//Запоминает данные
	W = incX(W);//Переходит к следующей позиции для записи
}


















